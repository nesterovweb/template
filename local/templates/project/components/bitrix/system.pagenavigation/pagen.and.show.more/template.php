<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$ClientID = 'navigation_'.$arResult['NavNum'];

$this->setFrameMode(true);

if(!$arResult["NavShowAlways"])
{
    if ($arResult["NavRecordCount"] == 0 || ($arResult["NavPageCount"] == 1 && $arResult["NavShowAll"] == false))
        return;
}
?>
<div class="pagen">
    <?
    $strNavQueryString = ($arResult["NavQueryString"] != "" ? $arResult["NavQueryString"]."&amp;" : "");
    $strNavQueryStringFull = ($arResult["NavQueryString"] != "" ? "?".$arResult["NavQueryString"] : "");
    if($arResult["bDescPageNumbering"] === true)
    {
    // to show always first and last pages
    $arResult["nStartPage"] = $arResult["NavPageCount"];
    $arResult["nEndPage"] = 1;

    $sPrevHref = '';
    if ($arResult["NavPageNomer"] < $arResult["NavPageCount"])
    {
        $bPrevDisabled = false;
        if ($arResult["bSavePage"])
        {
            $sPrevHref = $arResult["sUrlPath"].'?'.$strNavQueryString.'PAGEN_'.$arResult["NavNum"].'='.($arResult["NavPageNomer"]+1);
        }
        else
        {
            if ($arResult["NavPageCount"] == ($arResult["NavPageNomer"]+1))
            {
                $sPrevHref = $arResult["sUrlPath"].$strNavQueryStringFull;
            }
            else
            {
                $sPrevHref = $arResult["sUrlPath"].'?'.$strNavQueryString.'PAGEN_'.$arResult["NavNum"].'='.($arResult["NavPageNomer"]+1);
            }
        }
    }
    else
    {
        $bPrevDisabled = true;
    }

    $sNextHref = '';
    if ($arResult["NavPageNomer"] > 1)
    {
        $bNextDisabled = false;
        $sNextHref = $arResult["sUrlPath"].'?'.$strNavQueryString.'PAGEN_'.$arResult["NavNum"].'='.($arResult["NavPageNomer"]-1);
    }
    else
    {
        $bNextDisabled = true;
    }
    ?>

    <?if ($bPrevDisabled):?>
        <span class="disabled"><?=GetMessage("nav_prev")?></span>
    <?else:?>
        <a href="<?=$sPrevHref;?>" id="<?=$ClientID?>_previous_page"><?=GetMessage("nav_prev")?></a>
    <?endif;?>

    <?if ($bNextDisabled):?>
        <span class="disabled"><?=GetMessage("nav_next")?></span>
    <?else:?>
        <a href="<?=$sNextHref;?>" id="<?=$ClientID?>_next_page"><?=GetMessage("nav_next")?></a>
    <?endif;?>

    <?
    $bFirst = true;
    $bPoints = false;
    do
    {
        $NavRecordGroupPrint = $arResult["NavPageCount"] - $arResult["nStartPage"] + 1;
        if ($arResult["nStartPage"] <= 2 || $arResult["NavPageCount"]-$arResult["nStartPage"] <= 1 || abs($arResult['nStartPage']-$arResult["NavPageNomer"])<=2)
        {

            if ($arResult["nStartPage"] == $arResult["NavPageNomer"]):
                ?>
                <span class="nav-current-page"><?=$NavRecordGroupPrint?></span>
            <?
            elseif($arResult["nStartPage"] == $arResult["NavPageCount"] && $arResult["bSavePage"] == false):
                ?>
                <a href="<?=$arResult["sUrlPath"]?><?=$strNavQueryStringFull?>"><?=$NavRecordGroupPrint?></a>
            <?
            else:
                ?>
                <a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=$arResult["nStartPage"]?>"><?=$NavRecordGroupPrint?></a>
            <?
            endif;
            $bFirst = false;
            $bPoints = true;
        }
        else
        {
            if ($bPoints)
            {
                ?>...<?
                $bPoints = false;
            }
        }
        $arResult["nStartPage"]--;
    } while($arResult["nStartPage"] >= $arResult["nEndPage"]);
    }
    else
    {
    // to show always first and last pages
    $arResult["nStartPage"] = 1;
    $arResult["nEndPage"] = $arResult["NavPageCount"];

    $sPrevHref = '';
    if ($arResult["NavPageNomer"] > 1)
    {
        $bPrevDisabled = false;

        if ($arResult["bSavePage"] || $arResult["NavPageNomer"] > 2)
        {
            $sPrevHref = $arResult["sUrlPath"].'?'.$strNavQueryString.'PAGEN_'.$arResult["NavNum"].'='.($arResult["NavPageNomer"]-1);
        }
        else
        {
            $sPrevHref = $arResult["sUrlPath"].$strNavQueryStringFull;
        }
    }
    else
    {
        $bPrevDisabled = true;
    }

    $sNextHref = '';
    if ($arResult["NavPageNomer"] < $arResult["NavPageCount"])
    {
        $bNextDisabled = false;
        $sNextHref = $arResult["sUrlPath"].'?'.$strNavQueryString.'PAGEN_'.$arResult["NavNum"].'='.($arResult["NavPageNomer"]+1);
    }
    else
    {
        $bNextDisabled = true;
    }
    ?>

        <div class="pagen__items">

            <?
            $bFirst = true;
            $bPoints = false;
            do
            {
                if ($arResult["nStartPage"] <= 2 || $arResult["nEndPage"]-$arResult["nStartPage"] <= 1 || abs($arResult['nStartPage']-$arResult["NavPageNomer"])<=2)
                {

                    if ($arResult["nStartPage"] == $arResult["NavPageNomer"]):
                        ?>
                        <span class="pagen__item _active"><?=$arResult["nStartPage"]?></span>
                    <?
                    elseif($arResult["nStartPage"] == 1 && $arResult["bSavePage"] == false):
                        ?>
                        <a class="pagen__item js--ajax-pagen-item" href="<?=$arResult["sUrlPath"]?><?=$strNavQueryStringFull?>"><?=$arResult["nStartPage"]?></a>
                    <?
                    else:
                        ?>
                        <a class="pagen__item js--ajax-pagen-item" href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=$arResult["nStartPage"]?>"><?=$arResult["nStartPage"]?></a>
                    <?
                    endif;
                    $bFirst = false;
                    $bPoints = true;
                }
                else
                {
                    if ($bPoints)
                    {
                        ?>
                        <span class="pagen__item _elips">...</span>
                        <?
                        $bPoints = false;
                    }
                }
                $arResult["nStartPage"]++;
            } while($arResult["nStartPage"] <= $arResult["nEndPage"]);
            ?>

        </div>

        <? if($arResult["NavPageCount"] > 1) { ?>

            <? if ($arResult["NavPageNomer"]+1 <= $arResult["nEndPage"]) { ?>
                <?
                $plus = $arResult["NavPageNomer"]+1;
                $url = $arResult["sUrlPathParams"] . "PAGEN_" . $arResult['NavNum'] . "=" . $plus
                ?>

                <div class="pagen__show-more">
                    <a href="<?= $url ?>" class="btn _border js--ajax-pagen-show-more">???????????????? ??????</a>
                </div>

            <? } ?>

        <? } ?>

    <? }?>

</div>