<!DOCTYPE html>

<html id="html" lang="ru">

<head>
    <meta charset="utf-8" />

    <title>Project</title>

    <meta name="keywords" content="Project" />
    <meta name="description" content="Project description" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">

    <meta property="og:url" content="http://project.ru/" />
    <meta property="og:site_name" content="project" />
    <meta property="og:title" content="project" />
    <meta property="og:description" content="project description" />
    <meta property="og:type" content="blog" />
    <meta property="og:image" content="http://project.ru/img/logo.png" />

    <link rel="stylesheet" href="/frontend/assets/base.css?v=<?=filemtime($_SERVER['DOCUMENT_ROOT'].'/frontend/assets/base.css')?>" />

    <link rel="preload" href="" as="font" type="font/woff2" crossorigin>

    <script>
        <? $svgFilePath = $_SERVER['DOCUMENT_ROOT'].'/frontend/assets/svg-symbols.svg'; ?>
        var App = {
            svg_symbol_file_revision: <?= is_file($svgFilePath) ? filemtime($svgFilePath) : 1 ?>
        };
    </script>

</head>

<body>

    <div id="page" class="page <?= $pageClass ?>">

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