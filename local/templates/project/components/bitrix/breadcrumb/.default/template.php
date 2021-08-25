<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

use Bitrix\Main\Localization\Loc;
Loc::loadLanguageFile(__FILE__);

/**
 * @global CMain $APPLICATION
 */

global $APPLICATION;

//delayed function must return a string
if(empty($arResult))
    return "";

$strReturn = '';

$strReturn .= '<div class="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList">';
$strReturn .= '<div class="breadcrumbs__item"><a href="'.SITE_DIR.'">'.Loc::getMessage('Главная').' </a></div>';

$itemSize = count($arResult);
for($index = 0; $index < $itemSize; $index++)
{
    $title = htmlspecialcharsex($arResult[$index]["TITLE"]);

    if($arResult[$index]["LINK"] <> "" && $index != $itemSize-1)
    {
        $strReturn .= '
            <div class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                <a href="'.$arResult[$index]["LINK"].'" title="'.$title.'" itemprop="item">
                    <span itemprop="name">'.$title.'</span>
                </a>
                <meta itemprop="position" content="'.($index + 1).'" />
            </div>
		    ';
    }
    else
    {
        $strReturn .= '
            <div class="breadcrumbs__item _last" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                <span itemprop="name">'.$title.'</span>
				<meta itemprop="position" content="'.($index + 1).'" />
            </div>
            ';
    }
}

$strReturn .= '</div>';

return $strReturn;