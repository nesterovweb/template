<?
use Bitrix\Main\Loader;

Loader::includeModule('iblock');

class Project {

    // Возвращает размер файла
    public static function getFileSize($fileID = false, $fileSize = false, $precision = 0, array $types = array('b', 'Kb', 'Mb', 'Gb', 'Tb'))
    {

        if ($fileID) {
            $arFile = CFile::GetByID($fileID)->Fetch();
            $bytes = $arFile['FILE_SIZE'];
        } else {
            $bytes = $fileSize;
        }

        for ($i = 0; $bytes >= 1024 && $i < (count($types) - 1); $bytes /= 1024, $i++) ;

        return round($bytes, $precision) . ' ' . $types[$i];
    }

    // Возвращает формат файла
    public static function getFileFormat($fileID = false, $filePath = false){

        if ($fileID) {

            $arFile = CFile::GetByID($fileID)->Fetch();

            $fileFormat = explode('.', $arFile['ORIGINAL_NAME']);
            $fileFormat = $fileFormat[count($fileFormat)-1];
            if ($fileFormat == 'docx')
                $fileFormat = 'doc';

        } elseif ($filePath) {

            $fileFormat = explode('.', $filePath);
            $fileFormat = $fileFormat[count($fileFormat)-1];
            if ($fileFormat == 'docx')
                $fileFormat = 'doc';

        }

        return strtoupper($fileFormat);

    }

    // Возвращает оригинальное название файла
    public static function getFileOriginalName($fileID = false, $filePath = false){

        $result = '';

        if ($fileID) {

            $arFile = CFile::GetByID($fileID)->Fetch();

            $result = $arFile['ORIGINAL_NAME'];

        } elseif ($filePath) {

            $result = '?';

        }

        return $result;

    }

    // Склоняет существительное с числительным Пример: array('комментарий', 'комментария', 'комментариев')
    public static function getNumEnding($number, $cases, $incNum = true)
    {
        $numberMod = intval(preg_replace('/[^0-9.,]/', '', $number)) % 100;
        if ($numberMod >= 11 && $numberMod <= 19) {
            $result = $cases[2];
        } else {
            $numberMod = $numberMod % 10;
            switch ($numberMod) {
                case 1:
                    $result = $cases[0];
                    break;
                case 2:
                case 3:
                case 4:
                    $result = $cases[1];
                    break;
                default:
                    $result = $cases[2];
            }
        }

        return $incNum ? $number . ' ' . $result : $result;
    }

    // Обрезает текст, превыщающий заданную длину
    public static function getEllipsis($text, $config = [])
    {
        $config = array_merge([
            'mode' => 'word',
            'count' => 255,
            'suffix' => '&hellip;',
            'stripTags' => true,
        ], $config);

        if ($config['stripTags']) {
            $text = preg_replace([
                '/(\r?\n)+/',
                '/^(\r?\n)+/',
            ], [
                "\n",
                '',
            ], strip_tags($text));
        }

        if (strlen($text) > $config['count']) {
            mb_internal_encoding("UTF-8");
            $text = mb_substr($text, 0, $config['count']);
            switch ($config['mode']) {
                case 'direct':
                    break;
                case 'word':
                    $word = '[^ \t\n\.,:]+';
                    $text = preg_replace('/(' . $word . ')$/D', '', $text);
                    break;
                case 'sentence':
                    $sentence = '[\.\!\?]+[^\.\!\?]+';
                    $text = preg_replace('/(' . $sentence . ')$/D', '', $text);
                    break;
            }

            $text = preg_replace('/[ \.,;]+$/D', '', $text) . $config['suffix'];
        }

        if ($config['stripTags']) {
            $text = nl2br($text);
        }
        return $text;
    }

    // фиксирует предлоги в тексте
    public static function fixPretext($text)
    {
        $prepos = '(:?а|без|безо|в|во|вне|да|для|до|ее|ещё|еще|и|или|из|изо|или|их|за|к|как|ко|меж|между|на|над|надо|не|ни|но|о|об|обо|от|ото|перед|передо|по|под|подо|пред|предо|при|про|около|с|сквозь|со|то|там|у|уж|что|через|я|Вы|мы|Мы)';

        return preg_replace('/(?<=\s|^)'.$prepos.'(\s+)/i', '$1&nbsp;', $text);

    }

    // Возвращает ID инфоблока по символьному коду
    static public function getIblockIDByCode($code)
    {

        $iblocks = GetIBlockList(
            "",
            $code,
            [],
            [],
            1
        );
        if ($arIBlock = $iblocks->GetNext()) return $arIBlock['ID'];
        else return false;
        
    }

    // Возвращает тип инфоблока по символьному коду
    static public function getIblockTypeByCode($code)
    {

        $iblocks = GetIBlockList(
            "",
            $code,
            [],
            [],
            1
        );
        if ($arIBlock = $iblocks->GetNext()) return $arIBlock['IBLOCK_TYPE_ID'];
        else return false;

    }

    // Возвращает ID элемента по его символьному коду и символьному коду инфоблока
    static public function getIblockElementIDByCode($elCode, $iblockCode)
    {

        $res = CIBlockElement::GetList(
            [],
            [
                'IBLOCK_ID' => Project::getIblockIDByCode($iblockCode),
                'IBLOCK_TYPE' => Project::getIblockTypeByCode($iblockCode),
                'CODE' => $elCode
            ],
            false,
            ["nPageSize"=>1],
            ['ID']
        );
        if ($arFields = $res->Fetch()) return $arFields['ID'];
        else return false;

    }

    // Редактирует телефон для вставки в ссылку
    static public function phoneConvert($str)
    {
        return str_replace(['(',')',' ','-'],'',$str);
    }

    // Ресайз изображений
    public static function resizeImg($ID, $w = 640, $h = 480, $type = 2, $compress = 80)
    {
        
        $img = CFile::ResizeImageGet(
            $ID,
            array(
                "width" => $w,
                "height" => $h
            ),
            $type,
            false,
            false,
            false,
            $compress
        );

        return $img['src'];

    }

    // Возвращает дату в формате проекта
    public static function convertDate($date, $template = false) {

        global $DB;
        if (!$template) $template = $DB->DateFormatToPHP(CSite::GetDateFormat("SHORT"));

        return FormatDate($template, strtotime($date));

    }

    public static function getSiteOptions()
    {

        $result = [];

        $res = CIBlockElement::GetList(
            [],
            [
                'IBLOCK_ID' => self::getIblockIDByCode('site_options'),
                'IBLOCK_TYPE' => self::getIblockTypeByCode('site_options'),
                'ACTIVE' => 'Y',
            ],
            false,
            ["nPageSize"=>1],
            []
        );
        if ($arFields = $res->GetNextElement()) {
            foreach ($arFields->GetProperties() as $arProp) {
                if (isset($arProp['VALUE']['TEXT'])) {
                    $result[$arProp['CODE']] = $arProp['~VALUE']['TEXT'];
                } else {
                    $result[$arProp['CODE']] = $arProp['VALUE'];
                }
            }
        }

        return $result;

    }

    public static function getPersonalDateSuccessText()
    {

        $result = '';

        switch (LANGUAGE_ID) {
            case 'ru':
                $result = 'Отправляя эту форму, вы даете согласие на <a href="/personal-data/" target="_blank">обработку персональных данных</a> и <a href="/cookie/" target="_blank">использование файлов Cookies</a>';
                break;
            case 'en':
                $result = 'I have read and agree with <a href="'.SITE_DIR.'personal-data/" target="_blank">the Personal Data Processing Policy</a>';
                break;
        }

        return $result;

    }

    public static function includeComponent($fileName) {

        global $APPLICATION;
        $APPLICATION->IncludeComponent("bitrix:main.include", "", Array(
            "AREA_FILE_SHOW" => "file",	// Показывать включаемую область
                "AREA_FILE_SUFFIX" => "",
                "EDIT_TEMPLATE" => "",	// Шаблон области по умолчанию
                "PATH" => SITE_TEMPLATE_PATH."/includes/components/".$fileName.".php",	// Путь к файлу области
            ),
            false
        );

    }

    public static function includeBlock($fileName) {

        global $APPLICATION;
        $APPLICATION->IncludeComponent(
            "bitrix:main.include",
            "include.block",
            Array(
                "AREA_FILE_SHOW" => "file",
                "AREA_FILE_SUFFIX" => "",
                "EDIT_TEMPLATE" => "",
                "PATH" => SITE_TEMPLATE_PATH . '/includes/blocks/'.LANGUAGE_ID.'/'.$fileName.'.php'
            )
        );

    }

    // проставляет символьные коды элементам инфоблока
    public static function setCodeElementsByIblockID($iblockID)
    {

        $res = CIBlockElement::GetList(
            [],
            [
                'IBLOCK_ID' => $iblockID,
            ],
            false,
            false,
            ['ID', 'NAME']
        );
        while($arFields = $res->Fetch()){

            $trans = Cutil::translit($arFields['NAME'], "ru", ["replace_space"=>"-","replace_other"=>"-"]);

            $el = new CIBlockElement;
            $el->Update(
                $arFields['ID'],
                [
                    'CODE' => $trans.'-id'.$arFields['ID']
                ]
            );

        }

    }

    //получить ID значения для свойства инфоблока список, по его XML_ID
    static public function getIDPropertyEnumByXmlID($iblockID, $propertyCode, $XML_ID)
    {

        $db_enum_list = CIBlockProperty::GetPropertyEnum(
            $propertyCode,
            [],
            [
                "IBLOCK_ID" => $iblockID,
                "XML_ID" => $XML_ID,
            ]
        );
        if ($ar_enum_list = $db_enum_list->GetNext()) {
            return $ar_enum_list['ID'];
        } else {
            return false;
        }

    }

    static public function isPagen(){
        $request = \Bitrix\Main\Context::getCurrent()->getRequest();
        $flag = false;
        for ($i = 0; $i <= 10; $i++) {
            $reqPagen = $request->get('PAGEN_'.$i);
            if (!empty($reqPagen) && $reqPagen != 1) {
                $flag = true;
            }
        }
        return $flag;
    }

    static public function showMenuHref($link){

        global $APPLICATION;

        if ($link != $APPLICATION->GetCurDir()) {
            return 'href="'.$link.'"';
        }

    }

}