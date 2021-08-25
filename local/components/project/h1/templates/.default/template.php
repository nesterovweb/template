<?if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

$h1 = $APPLICATION->GetPageProperty('h1');
$h2 = $APPLICATION->GetPageProperty('h1_h2');

if (empty($h1) && empty($h2)) return;

$this->SetViewTarget('h1');
    if ($APPLICATION->GetPageProperty('without_h1') != 'yes') {
        if (!empty($h2)) {
            echo '<h1 class="h2">'.Project::fixPretext($h2).'</h1>';
        } else {
            echo '<h1 class="h1">'.Project::fixPretext($h1).'</h1>';
        }
    }
$this->EndViewTarget();