(function (_window, $) {

    var ToolTips = {},
        InfoGraphics = {},
        PhaseChanger = {};

    ToolTips = {
        show_bi_portal: function show_bi_portal() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-5')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltip_bi_portal = document.getElementById("webfocus-infographic__tooltip-bi-portal");
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            if (tooltip_bi_portal.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_bi_portal.style.display = "block";
            } else {
                tooltip_bi_portal.style.display = "none";
            }
        },
        show_embedded: function show_embedded() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-5')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltip_embedded = document.getElementById("webfocus-infographic__tooltip-embedded");
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            if (tooltip_embedded.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_embedded.style.display = "block";
            } else {
                tooltip_embedded.style.display = "none";
            }
        },
        show_info_apps: function show_info_apps() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-5')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltip_info_apps = document.getElementById("webfocus-infographic__tooltip-info-apps");
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            if (tooltip_info_apps.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_info_apps.style.display = "block";
            } else {
                tooltip_info_apps.style.display = "none";
            }
        },
        show_mobile: function show_mobile() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-5')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_mobile = document.getElementById("webfocus-infographic__tooltip-mobile");
            if (tooltip_mobile.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_mobile.style.display = "block";
            } else {
                tooltip_mobile.style.display = "none";
            }
        },

        show_predictive_analytics: function show_predictive_analytics() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_predictive_analytics = document.getElementById("webfocus-infographic__tooltip-predictive-analytics");
            if (tooltip_predictive_analytics.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_predictive_analytics.style.display = "block";
            } else {
                tooltip_predictive_analytics.style.display = "none";
            }
        },
        show_infographics: function show_infographics() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_infographics = document.getElementById("webfocus-infographic__tooltip-infographics");
            if (tooltip_infographics.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_infographics.style.display = "block";
            } else {
                tooltip_infographics.style.display = "none";
            }
        },

        show_search: function show_search() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_search = document.getElementById("webfocus-infographic__tooltip-search");
            if (tooltip_search.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_search.style.display = "block";
            } else {
                tooltip_search.style.display = "none";
            }
        },
        show_performance_management: function show_natural_language() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_performance_management = document.getElementById("webfocus-infographic__tooltip-performance-management");
            if (tooltip_performance_management.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_performance_management.style.display = "block";
            } else {
                tooltip_performance_management.style.display = "none";
            }
        },
        show_natural_language: function show_natural_language() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_natural_language = document.getElementById("webfocus-infographic__tooltip-natural-language");
            if (tooltip_natural_language.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_natural_language.style.display = "block";
            } else {
                tooltip_natural_language.style.display = "none";
            }
        },

        show_write_back: function show_write_back() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_write_back = document.getElementById("webfocus-infographic__tooltip-write-back");
            if (tooltip_write_back.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_write_back.style.display = "block";
            } else {
                tooltip_write_back.style.display = "none";
            }
        },

        show_tooltip_hp_data_store: function show_tooltip_hp_data_store() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_hp_data_store = document.getElementById("webfocus-infographic__tooltip-hp-data-store");
            if (tooltip_hp_data_store.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_hp_data_store.style.display = "block";
            } else {
                tooltip_hp_data_store.style.display = "none";
            }
        },
        show_tooltip_data_discovery: function show_tooltip_data_discovery() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_data_discovery = document.getElementById("webfocus-infographic__tooltip-data-discovery");
            if (tooltip_data_discovery.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_data_discovery.style.display = "block";
            } else {
                tooltip_data_discovery.style.display = "none";
            }
        },

        show_tooltip_reporting: function show_tooltip_reporting() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_reporting = document.getElementById("webfocus-infographic__tooltip-reporting");
            if (tooltip_reporting.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_reporting.style.display = "block";
            } else {
                tooltip_reporting.style.display = "none";
            }
        },

        show_tooltip_dashboards: function show_tooltip_dashboards() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_dashboards = document.getElementById("webfocus-infographic__tooltip-dashboards");
            if (tooltip_dashboards.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_dashboards.style.display = "block";
            } else {
                tooltip_dashboards.style.display = "none";
            }
        },

        show_tooltip_location_analytics: function show_tooltip_location_analytics() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_location_analytics = document.getElementById("webfocus-infographic__tooltip-location-analytics");
            if (tooltip_location_analytics.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_location_analytics.style.display = "block";
            } else {
                tooltip_location_analytics.style.display = "none";
            }
        },

        show_tooltip_scheduling: function show_tooltip_scheduling() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_scheduling = document.getElementById("webfocus-infographic__tooltip-scheduling");
            if (tooltip_scheduling.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_scheduling.style.display = "block";
            } else {
                tooltip_scheduling.style.display = "none";
            }
        },
        show_tooltip_document_analytics: function show_tooltip_document_analytics() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-4')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_document_analytics = document.getElementById("webfocus-infographic__tooltip-document-analytics");
            if (tooltip_document_analytics.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_document_analytics.style.display = "block";
            } else {
                tooltip_document_analytics.style.display = "none";
            }
        },

        //platform layer
        show_tooltip_data_management: function show_tooltip_data_management() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-3')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_data_management = document.getElementById("webfocus-infographic__tooltip-data-management");
            if (tooltip_data_management.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_data_management.style.display = "block";
            } else {
                tooltip_data_management.style.display = "none";
            }
        },

        show_tooltip_collaboration: function show_tooltip_collaboration() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-3')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_collaboration = document.getElementById("webfocus-infographic__tooltip-collaboration");
            if (tooltip_collaboration.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_collaboration.style.display = "block";
            } else {
                tooltip_collaboration.style.display = "none";
            }
        },

        show_tooltip_white_labeling: function show_tooltip_white_labeling() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-3')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_white_labeling = document.getElementById("webfocus-infographic__tooltip-white-labeling");
            if (tooltip_white_labeling.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_white_labeling.style.display = "block";
            } else {
                tooltip_white_labeling.style.display = "none";
            }
        },

        show_tooltip_security: function show_tooltip_security() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-3')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_security = document.getElementById("webfocus-infographic__tooltip-security");
            if (tooltip_security.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_security.style.display = "block";
            } else {
                tooltip_security.style.display = "none";
            }
        },

        show_tooltip_scaling: function show_tooltip_scaling() {
            var phase = $('.webfocus-infographic').hasClass('webfocus-infographic__phase-3')
                || $('.webfocus-infographic').hasClass('webfocus-infographic__phase-6');
            if (!phase) {
                return;
            }
            var tooltips = document.getElementsByClassName("webfocus-infographic__tooltips");
            var tooltip_scaling = document.getElementById("webfocus-infographic__tooltip-scaling");
            if (tooltip_scaling.style.display === "none") {
                for (var i = 0; i < tooltips.length; i++) {
                    tooltips[i].style.display = "none";
                }
                tooltip_scaling.style.display = "block";
            } else {
                tooltip_scaling.style.display = "none";
            }
        }
    };


    PhaseChanger = function () {
        this.phases = [];
        this.$component = $('.webfocus-infographic');
        this.currentPhase = 0;
        this.init = function () {
            this.goToPhase(0);
            this.bindEvents(this);
        };
        this.bindEvents = function (self) {
            this.$component.find('.webfocus-infographic__home-start').click(function () {
                self.goToPhase(1);
            });

            self.$component.find('.webfocus-infographic__subheader .webfocus-infographic__replay')
                .click(function () {
                    self.goToPhase(1);
                });
            self.$component.find('.webfocus-infographic__subheader .webfocus-infographic__prev')
                .click(function () {
                    var phase = self.currentPhase - 1;
                    if (phase === 1) {
                        //jump through animation;
                        phase = 0;
                    }
                    if (self.currentPhase === 6) {
                        phase = 1;
                    }
                    self.goToPhase(phase);
                });
            self.$component.find('.webfocus-infographic__subheader .webfocus-infographic__next')
                .click(function () {
                    self.goToPhase(self.currentPhase + 1)
                });
        };

        this.clearPhases = function () {
            this.$component.removeClass('webfocus-infographic__phase-0');
            this.$component.removeClass('webfocus-infographic__phase-1');
            this.$component.removeClass('webfocus-infographic__phase-2');
            this.$component.removeClass('webfocus-infographic__phase-3');
            this.$component.removeClass('webfocus-infographic__phase-4');
            this.$component.removeClass('webfocus-infographic__phase-5');
            this.$component.removeClass('webfocus-infographic__phase-6');
        };

        this.goToPhase = function (phase) {
            if (phase < 0 || phase > 6) {
                return;
            }
            this.clearPhases();
            this.currentPhase = phase;
            this.$component.addClass('webfocus-infographic__phase-' + phase);
            this.phases[phase](this);
        };


        this.phases[0] = function (self) {
            self.$component.find('.webfocus-infographic__content-fade')
                .removeClass('webfocus-infographic__content-fade');
            self.fadeAll(self, true);
            self.$component.find('.webfocus-infographic__subheader')
                .html(self.$component.find('.webfocus-infographic__header-content-' + self.currentPhase).html());
            self.$component.find('.webfocus-infographic__subheader').css('opacity', 1);
            self.bindEvents(self);
        };

        this.phases[1] = function (self) {

            self.$component.find('.webfocus-infographic__content-fade')
                .removeClass('webfocus-infographic__content-fade');

            self.$component.find('.webfocus-infographic__data-sources').css('opacity', '0');
            self.$component.find('.webfocus-infographic__data-source').css('opacity', '0');
            self.$component.find('.webfocus-infographic__heading-5').css('opacity', '0');

            self.$component.find('.webfocus-infographic__platform .webfocus-infographic__heading-2').css('opacity', '0');
            self.$component.find('.webfocus-infographic__platform-block-2').css('opacity', '0');
            self.$component.find('.webfocus-infographic__platform .webfocus-infographic__platform-block').css('opacity', '0');

            self.$component.find('.webfocus-infographic__analytics .webfocus-infographic__heading-2').css('opacity', '0');
            self.$component.find('.webfocus-infographic__analytics .webfocus-infographic__bubble').css('opacity', '0');

            self.$component.find('.webfocus-infographic__animation-2').css('opacity', 0);
            self.$component.find('.webfocus-infographic__presentation .webfocus-infographic__heading-2').css('opacity', '0');
            self.$component.find('.webfocus-infographic__presentation .webfocus-infographic__presentation-block').css('opacity', '0');
            self.$component.find('.webfocus-infographic__animation-1').css('opacity', 0);

            self.$component.find('.webfocus-infographic__subheader').css('opacity', 0);

            var timeout = 1000;

            var debug = document.location.hash;
            if (debug == '#debug') {

                timeout = self.phase1Level4(self);
                timeout = self.phase1Level3(self);
                timeout = self.phase1Level2(self);
                timeout = self.phase1Level1(self);
                timeout = self.phase1Level0(self);
            } else {
                setTimeout(function () {
                    timeout = self.phase1Level4(self);
                    setTimeout(function () {
                        timeout = self.phase1Level3(self);
                        setTimeout(function () {
                            timeout = self.phase1Level2(self);
                            setTimeout(function () {
                                timeout = self.phase1Level1(self);
                                setTimeout(function () {
                                    timeout = self.phase1Level0(self);
                                }, timeout);
                            }, timeout);
                        }, timeout);
                    }, timeout);
                }, timeout);
            }
        };


        this.phase1Level0 = function (self) {
            this.fadeAll(self, true);
            self.$component.find('.webfocus-infographic__subheader')
                .html(self.$component.find('.webfocus-infographic__header-content-' + self.currentPhase).html());
            self.$component.find('.webfocus-infographic__subheader').css('opacity', 1);
            self.$component.find('.grow-left').removeClass('grow-left');
            self.$component.find('.slide-in-left').removeClass('slide-in-left');
            self.bindEvents(self);
        };

        this.phase1Level1 = function (self) {
            self.$component.find('.webfocus-infographic__animation-2')
                .css('opacity', '1')
                .addClass('grow-left');

            var phaseTimeout = 500;
            setTimeout(function () {
                self.$component.find('.webfocus-infographic__presentation .webfocus-infographic__heading-2')
                    .addClass('slide-in-left')
                    .css('opacity', '1');
            }, phaseTimeout);

            phaseTimeout += 300;
            self.$component.find('.webfocus-infographic__presentation .webfocus-infographic__presentation-block').each(function () {
                var $el = $(this);
                self.drop($el, phaseTimeout);
                phaseTimeout += 300;
            });

            setTimeout(function () {
                self.$component.find('.webfocus-infographic__animation-1')
                    .css('opacity', '1')
                    .addClass('grow-left');
            }, phaseTimeout);

            return phaseTimeout + 500;
        };

        this.phase1Level2 = function (self) {
            self.$component.find('.webfocus-infographic__analytics .webfocus-infographic__heading-2')
                .addClass('slide-in-left')
                .css('opacity', '1');
            var phaseTimeout = 200;

            self.$component.find('.webfocus-infographic__analytics .webfocus-infographic__bubble-2').each(function () {
                var $el = $(this);
                self.drop($el, phaseTimeout);
                phaseTimeout += 200;
            });
            self.$component.find('.webfocus-infographic__analytics .webfocus-infographic__bubble-1').each(function () {
                var $el = $(this);
                self.drop($el, phaseTimeout);
                phaseTimeout += 200;
            });
            return phaseTimeout;

        };

        this.phase1Level3 = function (self) {
            self.$component.find('.webfocus-infographic__platform .webfocus-infographic__heading-2')
                .addClass('slide-in-left')
                .css('opacity', '1');

            var phaseTimeout = 300;

            self.drop(self.$component.find('.webfocus-infographic__platform-block-2'), phaseTimeout);
            phaseTimeout += 300;
            self.$component.find('.webfocus-infographic__platform .webfocus-infographic__platform-block').each(function () {
                var $el = $(this);
                self.drop($el, phaseTimeout);
                phaseTimeout += 300;
            });
            return phaseTimeout;
        };

        this.phase1Level4 = function (self) {

            var phaseTimeout = 500;
            self.$component.find('.webfocus-infographic__data-sources')
                .addClass('slide-in-left')
                .css('opacity', '1');

            setTimeout(function () {
                self.$component.find('.webfocus-infographic__data-source')
                    .css('opacity', '1');
            }, 200);


            self.$component.find('.webfocus-infographic__heading-5').each(function () {
                var label = $(this);
                setTimeout(function () {
                    label.css('opacity', '1');
                }, phaseTimeout);
                phaseTimeout += 100;
            });
            return phaseTimeout;
        };

        this.phases[2] = function (self) {
            self.fadeAll(self);
            self.$component.find('.webfocus-infographic__subheader').css('opacity', 0);
            setTimeout(function () {
                self.$component.find('.webfocus-infographic__subheader')
                    .html(self.$component.find('.webfocus-infographic__header-content-' + self.currentPhase).html());
                self.$component.find('.webfocus-infographic__subheader').css('opacity', 1);
                self.bindEvents(self);
            }, 500);
            self.$component.find('.webfocus-infographic__data-sources-block')
                .removeClass('webfocus-infographic__content-fade');
        };

        this.phases[3] = function (self) {
            self.fadeAll(self);
            self.$component.find('.webfocus-infographic__subheader').css('opacity', 0);
            setTimeout(function () {
                self.$component.find('.webfocus-infographic__subheader')
                    .html(self.$component.find('.webfocus-infographic__header-content-' + self.currentPhase).html());
                self.$component.find('.webfocus-infographic__subheader').css('opacity', 1);
                self.bindEvents(self);

            }, 500);
            self.$component.find('.webfocus-infographic__platform')
                .removeClass('webfocus-infographic__content-fade');
        };

        this.phases[4] = function (self) {
            self.fadeAll(self);
            self.$component.find('.webfocus-infographic__subheader').css('opacity', 0);
            setTimeout(function () {
                self.$component.find('.webfocus-infographic__subheader')
                    .html(self.$component.find('.webfocus-infographic__header-content-' + self.currentPhase).html());
                self.$component.find('.webfocus-infographic__subheader').css('opacity', 1);
                self.bindEvents(self);

            }, 500);
            self.$component.find('.webfocus-infographic__analytics')
                .removeClass('webfocus-infographic__content-fade');
        };

        this.phases[5] = function (self) {
            self.fadeAll(self);
            self.$component.find('.webfocus-infographic__subheader').css('opacity', 0);
            setTimeout(function () {
                self.$component.find('.webfocus-infographic__subheader')
                    .html(self.$component.find('.webfocus-infographic__header-content-' + self.currentPhase).html());
                self.$component.find('.webfocus-infographic__subheader').css('opacity', 1);
                self.bindEvents(self);

            }, 500);
            self.$component.find('.webfocus-infographic__presentation')
                .removeClass('webfocus-infographic__content-fade');
            self.$component.find('.webfocus-infographic__animation-2')
                .removeClass('webfocus-infographic__content-fade');
        };

        this.phases[6] = function (self) {
            self.$component.find('.webfocus-infographic__subheader').css('opacity', 0);
            setTimeout(function () {
                self.$component.find('.webfocus-infographic__subheader')
                    .html(self.$component.find('.webfocus-infographic__header-content-' + self.currentPhase).html());
                self.$component.find('.webfocus-infographic__subheader').css('opacity', 1);
                self.bindEvents(self);

            }, 500);
            self.$component.find('.webfocus-infographic__content-fade')
                .removeClass('webfocus-infographic__content-fade');
        };

        this.fadeAll = function (self, parent) {
            if (parent) {
                self.$component.find('.webfocus-infographic__content')
                    .addClass('webfocus-infographic__content-fade');
            } else {
                self.$component.find('.webfocus-infographic__content')
                    .removeClass('webfocus-infographic__content-fade');
                self.$component.find('.webfocus-infographic__presentation')
                    .addClass('webfocus-infographic__content-fade');
                self.$component.find('.webfocus-infographic__animation-2')
                    .addClass('webfocus-infographic__content-fade');
                self.$component.find('.webfocus-infographic__analytics')
                    .addClass('webfocus-infographic__content-fade');
                self.$component.find('.webfocus-infographic__platform')
                    .addClass('webfocus-infographic__content-fade');
                self.$component.find('.webfocus-infographic__data-sources-block')
                    .addClass('webfocus-infographic__content-fade');
            }

        };

        /**
         * Handles the drop effect;
         * @param $el
         * @timeout $timeout before it happens
         */
        this.drop = function ($el, timeout) {
            if (!timeout) {
                timeout = 0;
            }
            setTimeout(function () {
                $el.addClass('drop');
                setTimeout(function () {
                    $el.removeClass('drop');
                    $el.css('opacity', 1);
                }, 600);
            }, timeout);
        };
    };

    InfoGraphics.ToolTips = ToolTips;
    InfoGraphics.PhaseChanger = PhaseChanger;
    if (typeof _window.InfoGraphics === 'undefined') {
        _window.InfoGraphics = InfoGraphics;
    }


    $(document).on('click', function (event) {
        if (!$(event.target).closest('.webfocus-infographic__presentation-blocks').length) {
            var tooltip_bi_portal = document.getElementById("webfocus-infographic__tooltip-bi-portal");
            if (tooltip_bi_portal.style.display === "block") {
                tooltip_bi_portal.style.display = "none";
            }
            var tooltip_embedded = document.getElementById("webfocus-infographic__tooltip-embedded");
            if (tooltip_embedded.style.display === "block") {
                tooltip_embedded.style.display = "none";
            }
            var tooltip_info_apps = document.getElementById("webfocus-infographic__tooltip-info-apps");
            if (tooltip_info_apps.style.display === "block") {
                tooltip_info_apps.style.display = "none";
            }
            var tooltip_mobile = document.getElementById("webfocus-infographic__tooltip-mobile");
            if (tooltip_mobile.style.display === "block") {
                tooltip_mobile.style.display = "none";
            }
        }
        if (!$(event.target).closest('.webfocus-infographic__data-analytics').length) {
            var tooltip_predictive_analytics = document.getElementById("webfocus-infographic__tooltip-predictive-analytics");
            if (tooltip_predictive_analytics.style.display === "block") {
                tooltip_predictive_analytics.style.display = "none";
            }
            var tooltip_infographics = document.getElementById("webfocus-infographic__tooltip-infographics");
            if (tooltip_infographics.style.display === "block") {
                tooltip_infographics.style.display = "none";
            }
            var tooltip_search = document.getElementById("webfocus-infographic__tooltip-search");
            if (tooltip_search.style.display === "block") {
                tooltip_search.style.display = "none";
            }
            var tooltip_natural_language = document.getElementById("webfocus-infographic__tooltip-natural-language");
            if (tooltip_natural_language.style.display === "block") {
                tooltip_natural_language.style.display = "none";
            }
            var tooltip_write_back = document.getElementById("webfocus-infographic__tooltip-write-back");
            if (tooltip_write_back.style.display === "block") {
                tooltip_write_back.style.display = "none";
            }
            var tooltip_hp_data_store = document.getElementById("webfocus-infographic__tooltip-hp-data-store");
            if (tooltip_hp_data_store.style.display === "block") {
                tooltip_hp_data_store.style.display = "none";
            }
            var tooltip_data_discovery = document.getElementById("webfocus-infographic__tooltip-data-discovery");
            if (tooltip_data_discovery.style.display === "block") {
                tooltip_data_discovery.style.display = "none";
            }
            var tooltip_reporting = document.getElementById("webfocus-infographic__tooltip-reporting");
            if (tooltip_reporting.style.display === "block") {
                tooltip_reporting.style.display = "none";
            }
            var tooltip_dashboards = document.getElementById("webfocus-infographic__tooltip-dashboards");
            if (tooltip_dashboards.style.display === "block") {
                tooltip_dashboards.style.display = "none";
            }
            var tooltip_location_analytics = document.getElementById("webfocus-infographic__tooltip-location-analytics");
            if (tooltip_location_analytics.style.display === "block") {
                tooltip_location_analytics.style.display = "none";
            }
            var tooltip_scheduling = document.getElementById("webfocus-infographic__tooltip-scheduling");
            if (tooltip_scheduling.style.display === "block") {
                tooltip_scheduling.style.display = "none";
            }
            var tooltip_document_analytics = document.getElementById("webfocus-infographic__tooltip-document-analytics");
            if (tooltip_document_analytics.style.display === "block") {
                tooltip_document_analytics.style.display = "none";
            }
        }
        if (!$(event.target).closest('.webfocus-infographic__platform-blocks').length) {
            var tooltip_data_management = document.getElementById("webfocus-infographic__tooltip-data-management");
            if (tooltip_data_management.style.display === "block") {
                tooltip_data_management.style.display = "none";
            }
            var tooltip_collaboration = document.getElementById("webfocus-infographic__tooltip-collaboration");
            if (tooltip_collaboration.style.display === "block") {
                tooltip_collaboration.style.display = "none";
            }
            var tooltip_white_labeling = document.getElementById("webfocus-infographic__tooltip-white-labeling");
            if (tooltip_white_labeling.style.display === "block") {
                tooltip_white_labeling.style.display = "none";
            }
            var tooltip_security = document.getElementById("webfocus-infographic__tooltip-security");
            if (tooltip_security.style.display === "block") {
                tooltip_security.style.display = "none";
            }
            var tooltip_scaling = document.getElementById("webfocus-infographic__tooltip-scaling");
            if (tooltip_scaling.style.display === "block") {
                tooltip_scaling.style.display = "none";
            }
        }
    });

    $(document).ready(function () {
        $('.webfocus-infographic__tooltips').css('display', 'none');
        new PhaseChanger().init();
    });

}(window, jQuery));
