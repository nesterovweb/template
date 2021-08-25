<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
?>

<style>
    font.notetext{
        color: inherit;
    }
</style>

<div class="section mt-0-rem">
    <div class="container">

        <div class="mw-905">

            <form action="<?= SITE_DIR ?>search/" class="search-form mb-2-rem" novalidate>
                <div class="form-item">
                    <div class="form-item__label"><?= GetMessage("Введите поисковый запрос") ?></div>
                    <input type="text"
                           name="q"
                           value="<?= $arResult["REQUEST"]["QUERY"] ?>"
                           autocomplete="off"
                    />
                </div>
                <button type="submit"><svg class="svg-icon"><use xlink:href="#search"></use></svg></button>
            </form>

            <? if (isset($arResult["REQUEST"]["ORIGINAL_QUERY"])): ?>
                <div class="">
                    <? echo GetMessage("CT_BSP_KEYBOARD_WARNING", array("#query#" => '<a href="' . $arResult["ORIGINAL_QUERY_URL"] . '">' . $arResult["REQUEST"]["ORIGINAL_QUERY"] . '</a>')) ?>
                </div>
            <? endif; ?>

            <? if ($arResult["REQUEST"]["QUERY"] === false && $arResult["REQUEST"]["TAGS"] === false): ?>

            <? elseif ($arResult["ERROR_CODE"] != 0): ?>

                <p><?= GetMessage("SEARCH_ERROR") ?></p>

                <? ShowError($arResult["ERROR_TEXT"]); ?>

                <p><?= GetMessage("SEARCH_CORRECT_AND_CONTINUE") ?></p>

                <br/><br/>

                <p><?= GetMessage("SEARCH_SINTAX") ?><br/><b><?= GetMessage("SEARCH_LOGIC") ?></b></p>

                <table border="0" cellpadding="5">
                    <tr>
                        <td align="center" valign="top"><?= GetMessage("SEARCH_OPERATOR") ?></td>
                        <td valign="top"><?= GetMessage("SEARCH_SYNONIM") ?></td>
                        <td><?= GetMessage("SEARCH_DESCRIPTION") ?></td>
                    </tr>
                    <tr>
                        <td align="center" valign="top"><?= GetMessage("SEARCH_AND") ?></td>
                        <td valign="top">and, &amp;, +</td>
                        <td><?= GetMessage("SEARCH_AND_ALT") ?></td>
                    </tr>
                    <tr>
                        <td align="center" valign="top"><?= GetMessage("SEARCH_OR") ?></td>
                        <td valign="top">or, |</td>
                        <td><?= GetMessage("SEARCH_OR_ALT") ?></td>
                    </tr>
                    <tr>
                        <td align="center" valign="top"><?= GetMessage("SEARCH_NOT") ?></td>
                        <td valign="top">not, ~</td>
                        <td><?= GetMessage("SEARCH_NOT_ALT") ?></td>
                    </tr>
                    <tr>
                        <td align="center" valign="top">( )</td>
                        <td valign="top">&nbsp;</td>
                        <td><?= GetMessage("SEARCH_BRACKETS_ALT") ?></td>
                    </tr>
                </table>

            <? elseif (count($arResult['SEARCH']) > 0):

                $cnt = $arResult['NAV_RESULT']->NavRecordCount; ?>

                <div class="mb-4-rem"><?= Project::getNumEnding($cnt, ['Найден', 'Найдено', 'Найдено'], false) ?> <?= $cnt ?> <?= Project::getNumEnding($cnt, ['результат', 'результата', 'результатов'], false) ?> по запросу "<?= $arResult["REQUEST"]["QUERY"] ?>"</div>

                <div class="js--ajax-pagen-container">

                    <div class="search-items js--ajax-pagen-list">

                        <? foreach ($arResult['SEARCH'] as $arItem): ?>

                            <div class="search-item">

                                <div class="search-item__title h4 mb-1-rem">
                                    <a href="<?= $arItem["URL"] ?>" class=""><? echo $arItem["TITLE_FORMATED"] ?></a>
                                </div>

                                <? if (!empty($arItem["BODY_FORMATED"])) { ?>
                                    <div class="search-item__text mb-1-rem">
                                        <?= htmlspecialcharsback($arItem["BODY_FORMATED"]) ?>
                                    </div>
                                <? } ?>

                                <? if ($arItem["CHAIN_PATH"]):?>
                                    <div class="breadcrumbs _search">
                                        <?= $arItem["CHAIN_PATH"] ?>
                                    </div>
                                <? endif; ?>

                            </div>

                        <? endforeach; ?>

                        <?= $arResult["NAV_STRING"] ?>

                    </div>

                </div>

            <? else: ?>
                <? ShowNote(GetMessage("SEARCH_NOTHING_TO_FOUND")); ?>
            <? endif; ?>

        </div>

    </div>
</div>