<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Localization\Loc;
Loc::loadLanguageFile(__FILE__);

$request = \Bitrix\Main\Context::getCurrent()->getRequest();
$formID = $arResult['FORM_ID'];
$formUnique = $arResult['FORM_UNIQUE'];

if ($request->isPost() && check_bitrix_sessid('sid') && $request->get('form-unique') == $formUnique) {
    $APPLICATION->RestartBuffer();
    echo json_encode($arResult['RESPONSE']);
    die();
}
?>

<form action="<?= $APPLICATION->GetCurPage(); ?>" method="POST" class="js--webform" novalidate>

    <div class="h2"><?=Loc::getMessage('Обратная связь');?></div>

    <?= bitrix_sessid_post('sid') ?>
    <input type="hidden" name="form_id" value="<?= $formID; ?>">
    <input type="hidden" name="form-unique" value="<?= $formUnique; ?>">

    <div class="form-item">
        <div class="form-item__label"><?=Loc::getMessage('Представьтесь, пожалуйста');?>:</div>
        <input type="text" name="name">
        <div class="form-item__error"></div>
    </div>

    <div class="form-item">
        <div class="form-item__label"><?=Loc::getMessage('Введите e-mail');?> (*)</div>
        <input type="email" name="email">
        <div class="form-item__error"></div>
    </div>

    <div class="form-item">
        <div class="form-item__label"><?=Loc::getMessage('Введите номер телефона');?> (*)</div>
        <input type="tel" name="phone" placeholder="+ (   )   -  -  " class="js--phone-mask">
        <div class="form-item__error"></div>
    </div>

    <div class="form-item">
        <div class="form-item__label"><?=Loc::getMessage('Выберите тип вопроса');?>*</div>
        <select name="type">
            <option value=""></option>
            <? foreach ([Loc::getMessage('Покупка продукции'),Loc::getMessage('Трудоустройство'),Loc::getMessage('Качество продукции'),Loc::getMessage('Сотрудничество'),Loc::getMessage('Другое')] as $item) { ?>
                <option value="<?= $item ?>"><?= $item ?></option>
            <? } ?>
        </select>
        <div class="form-item__error"></div>
    </div>

    <div class="form-item">
        <div class="form-item__label"><?=Loc::getMessage('Текст сообщения');?> (*)</div>
        <textarea name="message" rows="5"></textarea>
        <div class="form-item__error"></div>
    </div>

    <div class="form-item">
        <div class="form-item__label _static"><?=Loc::getMessage('Файл');?></div>
        <div class="form-item__file js--input-file">
            <input type="file" name="file">
            <a href="javascript:void(0);" class="form-item__file__add js--input-file-add"><?=Loc::getMessage('Выбрать файл');?></a>
            <div class="form-item__file__info">
                <span class="js--input-file-text"></span>
                <a href="javascript:void(0);" class="form-item__file__info__delete js--input-file-delete"></a>
            </div>
        </div>
        <div class="form-item__error"></div>
    </div>

    <div class="form-item">
        <label class="form-item__checkbox style">
            <input type="checkbox" name="agree" value="yes">
            <i></i>
            <?= Project::getPersonalDateSuccessText() ?>
        </label>
        <div class="form-item__error"></div>
    </div>

    <div class="form-item">
        <button type="submit" class="btn"><?=Loc::getMessage('Отправить');?></button>
    </div>

</form>

<? $this->SetViewTarget('frontend_dependence'); ?>
    <script src="/front-libs/js/jquery.inputmask.bundle.min.js"></script>
    <script src="/front-libs/js/jquery.inputmask-multi.min.js"></script>
<? $this->EndViewTarget(); ?>