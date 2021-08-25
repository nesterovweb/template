<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);

if ($arResult["FILE"] <> '') {

    if (trim(file_get_contents($arResult["FILE"])) != false) {

        ?><div class="include-block"><?

        include($arResult["FILE"]);

        ?></div><?

    }

}