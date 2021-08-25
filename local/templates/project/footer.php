<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Localization\Loc;
Loc::loadLanguageFile(__FILE__);

global $APPLICATION;
$curDir = $APPLICATION->GetCurDir();

$server = \Bitrix\Main\Context::getCurrent()->getServer();
$http = (CMain::IsHTTPS()) ? "https://" : "http://";
$siteUrl = $http.$server->getServerName();

// компонент для вывода h1 из параметров страницы в header.php, т.к. он там просто так не доступен
$APPLICATION->IncludeComponent("project:h1", "", []);
?>

</div><!--main-->

<div class="footer"></div>

<div class="cookie-popup js--cookie-popup">
    <div class="container">

        <div class="cookie-popup__row">
            <div class="cookie-popup__row__text">
                <p>Сайт использует файлы «cookie» с целью персонализации сервисов и повышения удобства пользования веб-сайтом.</p>
                <p>Если Вы согласны, продолжайте пользоваться веб-сайтом.</p>
            </div>
            <div class="cookie-popup__row__btns">
                <a href="javascript:void(0);" class="btn js--cookie-success">Согласен</a>
            </div>
        </div>

    </div>
</div>

</div><!--page-->

<link rel="stylesheet" href="/frontend/assets/global.css?v=<?=filemtime($_SERVER['DOCUMENT_ROOT'].'/frontend/assets/global.css')?>">
<? $pageCss = '/frontend/assets/page-'.$pageFrontendDependence.'.css'; ?>
<link rel="stylesheet" href="<?= $pageCss ?>?v=<?=filemtime($_SERVER['DOCUMENT_ROOT'].$pageCss)?>">

<script defer src="/frontend/libs/js/jquery-3.6.0.min.js"></script>
<script defer src="/frontend/libs/js/pace.min.js"></script>
<script defer src="/frontend/libs/js/lozad.js"></script>
<script defer src="/frontend/libs/js/scrollMagicPack.js"></script>
<script defer src="/frontend/libs/js/default-passive-events.js"></script>

<script defer src="/frontend/assets/base.js?v=<?=filemtime($_SERVER['DOCUMENT_ROOT'].'/frontend/assets/base.js')?>"></script>
<script defer src="/frontend/assets/global.js?v=<?=filemtime($_SERVER['DOCUMENT_ROOT'].'/frontend/assets/global.js')?>"></script>
<? $pageJs = '/frontend/assets/page-'.$pageFrontendDependence.'.js'; ?>
<script defer src="<?= $pageJs ?>?v=<?=filemtime($_SERVER['DOCUMENT_ROOT'].$pageJs)?>"></script>

</body>

</html>