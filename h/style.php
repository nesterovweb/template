<?php
$pageClass = '_index';
$pageFrontendDependence = 'index';
include 'header.php';
?>

<div class="container">

    <div class="section">

        <h2 class="mb-2_5-rem">Списки</h2>

        <div class="row">
            <div class="col-md-6">

                <h4>Заголовок маркированного списка</h4>

                <div class="style">
                    <ul class="mb-2_5-rem">
                        <li>Уникальный источник белка</li>
                        <li>
                            Богатый состав полезных веществ
                            <ul>
                                <li>Второй уровень списка</li>
                                <li>Второй уровень списка</li>
                            </ul>
                        </li>
                        <li>Экологически чистый продукт</li>
                        <li>Глубокая заморозка в море</li>
                    </ul>
                </div>

            </div>
            <div class="col-md-6">

                <h4>Нумерованный список</h4>

                <div class="style">
                    <ol class="">
                        <li>Уникальный источник белка</li>
                        <li>
                            Богатый состав полезных веществ
                            <ol>
                                <li>Второй уровень списка</li>
                                <li>Второй уровень списка</li>
                            </ol>
                        </li>
                        <li>Экологически чистый продукт</li>
                        <li>Глубокая заморозка в море</li>
                    </ol>
                </div>

            </div>
        </div>

    </div>

    <div class="section">

        <h2>Табы</h2>

        <div class="row">
            <div class="col-md-6">

                <div class="tabs js--tabs">
                    <div class="tabs__menu js--tabs-menu">
                        <div class="tabs__menu__items">
                            <div class="tabs__menu__item ">
                                <a href="#tab-1" class="tabs__menu__link js--tabs-link">Таб 1 Таб 1 Таб 1 Таб 1 Таб 1</a>
                            </div>
                            <div class="tabs__menu__item">
                                <a href="#tab-2" class="tabs__menu__link js--tabs-link">Таб 2 Таб 2 Таб 2 Таб 2 Таб 2</a>
                            </div>
                            <div class="tabs__menu__item">
                                <a href="#tab-3" class="tabs__menu__link js--tabs-link">Таб 3 Таб 3 Таб 3 Таб 3 Таб 3</a>
                            </div>
                            <div class="tabs__menu__item">
                                <a href="#tab-4" class="tabs__menu__link js--tabs-link">Таб 4 Таб 4 Таб 4 Таб 4 Таб 4</a>
                            </div>
                        </div>
                        <div class="tabs__menu__scrollbar js--tabs-menu-scrollbar"></div>
                    </div>
                    <div class="tabs__body js--tabs-body" id="tab-1"><div class="h4">Содержание таба 1</div></div>
                    <div class="tabs__body js--tabs-body" id="tab-2"><div class="h4">Содержание таба 2</div></div>
                    <div class="tabs__body js--tabs-body" id="tab-3"><div class="h4">Содержание таба 3</div></div>
                    <div class="tabs__body js--tabs-body" id="tab-4"><div class="h4">Содержание таба 4</div></div>
                </div>

            </div>
        </div>

    </div>

    <div class="section">

        <h2>Пагинация</h2>

        <div class="pagen">
            <div class="pagen__items">
                <a class="pagen__item" href="javascript:void(0);">1</a>
                <span class="pagen__item _active">2</span>
                <a class="pagen__item" href="javascript:void(0);">3</a>
                <a class="pagen__item" href="javascript:void(0);">4</a>
                <a class="pagen__item" href="javascript:void(0);">5</a>
                <span class="pagen__item _elips">...</span>
                <a class="pagen__item" href="javascript:void(0);">12</a>
            </div>
            <div class="pagen__show-more">
                <a href="javascript:void(0);" class="btn _border">Показать еще</a>
            </div>
        </div>

    </div>

    <div class="section">

        <h2>Аккордеон</h2>

        <div class="row">
            <div class="col-md-6">

                <div class="accordion-list">
                    <div class="accordion js--accordion">
                        <div class="accordion__head">
                            <div class="accordion__head__title">Аккордеон 1</div>
                            <a href="javascript:void(0);" class="accordion__head__arrow js--accordion-toggler"></a>
                        </div>
                        <div class="accordion__body js--accordion-body">
                            <div class="">
                                Аккордеон 1
                            </div>
                        </div>
                    </div>
                    <div class="accordion js--accordion">
                        <div class="accordion__head">
                            <div class="accordion__head__title">Аккордеон 2</div>
                            <a href="javascript:void(0);" class="accordion__head__arrow js--accordion-toggler"></a>
                        </div>
                        <div class="accordion__body js--accordion-body">
                            <div class="">
                                Аккордеон 2
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <div class="section">

        <h2>Попап</h2>

        <a href="#style-popup" class="js--popup">открыть попап</a>
        <div class="d-none">
            <div id="style-popup" class="">
                <h2>Заголовок попапа</h2>
            </div>
        </div>

    </div>

    <div class="section">

        <h2>Слайдер</h2>

        <div class="row">
            <div class="col-md-6">

                <div class="slider js--slider" data-items="2" data-items-md="3">
                    <div class="p-r">
                        <div class="slider__container js--slider-container">
                            <div class="slider__slides js--slider-slides">
                                <div class="slider__slide">Slide 1</div>
                                <div class="slider__slide">Slide 2</div>
                                <div class="slider__slide">Slide 3</div>
                                <div class="slider__slide">Slide 4</div>
                            </div>
                        </div>
                        <div class="slider__nav _horizontal">
                            <a href="javascript:void(0);" class="slider__nav__arrow _prev js--slider-prev"></a>
                            <a href="javascript:void(0);" class="slider__nav__arrow _next js--slider-next"></a>
                        </div>
                    </div>
                    <div class="slider__pagination js--slider-pagination"></div>
                    <div class="slider__scrollbar js--slider-scrollbar"></div>
                </div>

            </div>
        </div>

    </div>

</div>

<?php
include 'footer.php';
?>