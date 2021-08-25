<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

use Bitrix\Main\Localization\Loc;
Loc::loadLanguageFile(__FILE__);

$request = \Bitrix\Main\Context::getCurrent()->getRequest();
$server = \Bitrix\Main\Context::getCurrent()->getServer();
global $APPLICATION;
$curDir = $APPLICATION->GetCurDir();

$GLOBALS['SITE_OPTIONS'] = Project::getSiteOptions();

$GLOBALS['IS_NO_PAGESPEED'] = strpos($_SERVER['HTTP_USER_AGENT'],'Chrome-Lighthouse') === false;

global $USER;
?>
<!DOCTYPE html>
<html id="html" lang="<?= LANGUAGE_ID ?>" class="_lang-<?= LANGUAGE_ID ?>">
<head>

    <meta charset="utf-8" />
    <title><? $APPLICATION->ShowTitle(); ?></title>
    <?
    $APPLICATION->ShowMeta("description", false, false);
    $APPLICATION->ShowMeta("robots", false, false);

    $http = (CMain::IsHTTPS()) ? "https://" : "http://";
    $siteUrl = $http.$server->getServerName();
    $url = $siteUrl.$APPLICATION->GetCurDir();
    $img = $siteUrl.'/img/share.jpg';
    ?>
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Project" />
    <meta property="og:url" content="<?= $url ?>" />
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="<?= $APPLICATION->ShowTitle() ?>" />
    <meta property="og:description" content="<?= $APPLICATION->ShowProperty("description") ?>" />
    <meta property="og:image" content="<?= $img ?>" />
    <meta name="twitter:title" content="<?= $APPLICATION->ShowTitle() ?>">
    <meta name="twitter:description" content="<?= $APPLICATION->ShowProperty("description") ?>">
    <meta name="twitter:image" content="<?= $img ?>">

    <link rel="canonical" href="<?= $APPLICATION->GetCurDir() ?>" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff2d00">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">

    <?if (!$USER->IsAuthorized()) {
        CJSCore::Init(['ajax']);
    }else{
        $APPLICATION->ShowCSS();
        $APPLICATION->ShowHeadStrings();
    }?>

    <link rel="stylesheet" href="/frontend/assets/base.css?v=<?=filemtime($_SERVER['DOCUMENT_ROOT'].'/frontend/assets/base.css')?>" />

    <link rel="preload" href="" as="font" type="font/woff2" crossorigin>

    <script>
        <? $svgFilePath = $_SERVER['DOCUMENT_ROOT'].'/frontend/assets/svg-symbols.svg'; ?>
        var App = {
            svg_symbol_file_revision: <?= is_file($svgFilePath) ? filemtime($svgFilePath) : 1 ?>
        };
    </script>

    <? if ($GLOBALS['IS_NO_PAGESPEED']) { ?>
    <? } ?>

</head>
<body>

    <? if ($GLOBALS['IS_NO_PAGESPEED']) { ?>
    <? } ?>

    <? if ($USER->IsAuthorized()) {
        $APPLICATION->ShowPanel();
    } ?>

    <div class="page <?= $pageClass ?> <? $APPLICATION->ShowViewContent('page_class'); ?>">

        <div class="preloader">
            <img class="preloader__logo" src="/img/svg/logo.svg" alt="preloader">
        </div>

        <div class="ajax-preloader js--ajax-preloader">
            <img src="/img/svg/logo.svg" alt="logo">
        </div>

        <div class="header js--header">
            <div class="container">
                <a href="./" class="h-logo">
                    <img src="/img/svg/logo.svg" alt="logo">
                </a>
            </div>
        </div>

        <div class="main">