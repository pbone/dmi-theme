/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function($, Drupal) {
  "use strict";

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.infobuilders = {
    attach: function(context, settings) {
      var activeTrailLink = $(".m-menu--primary .active-trail");

      // Search Overlay form
      $("#site-search-link")
        .unbind("click")
        .click(function(e) {
          e.preventDefault();
          preventBodyScroll();
          initOverlay();
          initSearchOverlay();
          $(this).toggleClass("is-active");
          $(activeTrailLink).toggleClass("active-trail");
          $(".m-search-close")
            .unbind("click")
            .click(function(e) {
              e.preventDefault();
              initOverlay();
              initSearchOverlay();
              preventBodyScroll();
              $(activeTrailLink).toggleClass("active-trail");
              $("#site-search-link").toggleClass("is-active");
            });
        });

      // Mobile Navigation
      $("#mobile-nav-trigger")
        .unbind("click")
        .click(function(e) {
          e.preventDefault();
          preventBodyScroll();
          initOverlay("white");
          initHamburgerAnimation();
          initMobileNav();
        });

      $(".close-video-modal").on("click", function() {
        var videoId = $(this).attr("data-video");
        $("#frame-" + videoId).attr("src", "");
      });

      $(".open-video-modal").on("click", function() {
        var videoId = $(this).attr("data-video");

        if (window.video_embed.videos[videoId].src == undefined) {
          var src = window.video_embed.videos[videoId].src;
          $("#frame-" + videoId).attr("src", src);
          window.video_embed.videos[videoId] = {
            src: document.getElementById("frame-" + videoId).src
          };
          //$('#frame-' + videoId).attr('src', window.video_embed.videos[videoId].src);
        } else if (window.video_embed.videos[videoId].src.length) {
          $("#frame-" + videoId).attr(
            "src",
            window.video_embed.videos[videoId].src
          );
        }
      });
    }
  };

  // Account for sticky top nav in jump links
  Drupal.behaviors.infobuildersOptOutOrder = {
    attach: function(context, settings) {
      $(document).ready(function() {
        var list = $("#edit-field-stay-informed");
        var listItems = list.children("div");
        list.append(listItems.get().reverse());
      });
    }
  };

  // Account for sticky top nav in jump links
  Drupal.behaviors.infobuildersJumpLinkNavGap = {
    attach: function(context, settings) {
      $(document).ready(function() {
        $(function() {
          //Executed on page load with URL containing an anchor tag.
          if ($(location.href.split("#")[1])) {
            var target = $("#" + location.href.split("#")[1]);
            if (target.length) {
              //offset height of header here too.
              $("html,body").animate(
                {
                  scrollTop: target.offset().top - 300 //offsets for fixed header
                },
                800
              );
              return false;
            }
          }
        });
      });
    }
  };
  // Rewrite markup for instagram block so that it looks like the old one

  Drupal.behaviors.infobuildersInstaBlock = {
    attach: function(context, settings) {
      $(document).ready(function() {
        $(function() {
          if ($("#instafeed").length) {
            $(".instapic:first-child").wrap(
              "<div class='l-instagram-main'></div>"
            );
            //$(".instapic").addClass("data");
            // $(".instapic:nth-child").wrap("<div class='l-instagram-timeline'></div>");
            $("<div class='l-instagram-timeline'>").insertAfter(
              "#instafeed .l-instagram-main"
            );

            $(".instapic:not(:first-child)").prependTo(
              "#instafeed .l-instagram-timeline"
            );
          }
        });
      });
    }
  };

  // ONCLICK SWAP OUT LOGO - FOR DEV/SPEC SHOWCASE ONLY

  Drupal.behaviors.infobuildersSummitLogoSwap = {
    attach: function(context, settings) {
      $(document).ready(function() {
        if ($("body").hasClass("section-summit")) {
          $("a.summit-logo-link1").click(function() {
            // alert("LOGO LINK 1");
            $("div.logo-swap1").removeClass("is-active");
            $("div.logo-swap1").addClass("is-hidden");
            $("div.logo-swap2").addClass("is-active");
            $("div.logo-swap2").removeClass("is-hidden");
          });
          $("a.summit-logo-link2").click(function() {
            $("div.logo-swap2").removeClass("is-active");
            $("div.logo-swap2").addClass("is-hidden");
            $("div.logo-swap3").addClass("is-active");
            $("div.logo-swap3").removeClass("is-hidden");
          });
          $("a.summit-logo-link3").click(function() {
            $("div.logo-swap3").removeClass("is-active");
            $("div.logo-swap3").addClass("is-hidden");
            $("div.logo-swap1").addClass("is-active");
            $("div.logo-swap1").removeClass("is-hidden");
          });
        }
      });
    }
  };

  //DO SOMETHING ON CLICK OF SEARCH SUBMIT< BLOG SECTION ONLY
  Drupal.behaviors.infobuildersBlogSearchButtons = {
    attach: function(context, settings) {
      $(document).ready(function() {
        if ($("body").hasClass("section-blog")) {
          $("#edit-submit").click(function() {
            //  $("form").attr("action", $("form").attr("action") + "&type=blog");
          });
        }
      });
    }
  };

  // If blog topic tax term is applied, add is-active class to nav item

  Drupal.behaviors.infobuildersActiveBlogNav = {
    attach: function(context, settings) {
      $(document).ready(function() {
        if ($("body").hasClass("blog-topic-industry-focus")) {
          $("li.industry-focus").addClass("is-active");
        }
        if ($("body").hasClass("blog-topic-news-amp-events")) {
          $("li.news-events").addClass("is-active");
        }
        if ($("body").hasClass("blog-topic-use-cases")) {
          $("li.use-cases").addClass("is-active");
        }
        if ($("body").hasClass("blog-topic-analytics")) {
          $("li.analytics").addClass("is-active");
        }
        if ($("body").hasClass("blog-topic-data")) {
          $("li.data").addClass("is-active");
        }

        //If this is the selected blog topic in the view, reflect this in
        // the nav, also, turn the filter select button the same color as
        // active blog nav

        if ($("div").hasClass("show-filter-author")) {
          $(".l-filter-main").removeClass("is-hidden");
        }

        if ($("h1").hasClass("industry-focus")) {
          $("h1").text("Industry Focus");
          $(".l-filter-main").removeClass("is-hidden");
          $("li.industry-focus").addClass("is-active");
          $(".industry-color").insertBefore(".m-filter-button");
          $(".industry-color").addClass("industry-focus");
        }

        if ($("h1").hasClass("news-and-events")) {
          $("h1").text("News & Events");
          $("li.news-events").addClass("is-active");
          $(".industry-color").insertBefore(".m-filter-button");
          $(".industry-color").addClass("news-and-events");
        }

        if ($("h1").hasClass("use-cases")) {
          $("h1").text("Use Cases");
          $("li.use-cases").addClass("is-active");
          $(".industry-color").insertBefore(".m-filter-button");
          $(".industry-color").addClass("use-cases");
        }

        if ($("h1").hasClass("analytics")) {
          $("h1").text("Analytics");
          $("li.analytics").addClass("is-active");
          $(".industry-color").insertBefore(".m-filter-button");
          $(".industry-color").addClass("analytics");
        }

        if ($("h1").hasClass("data")) {
          $("h1").text("Data");
          $("li.data").addClass("is-active");
          $(".industry-color").insertBefore(".m-filter-button");
          $(".industry-color").addClass("data");
        }

        if ($(".zurb-foundation-callout").hasClass(".blog")) {
          $(".blog").insertBefore(".sharethis-wrapper");
        }
        // H2 HEADERS ON THE BLOG LISTING PAGE
        if ($("h2").hasClass("industry-focus")) {
          $(".industry-focus").css("cursor", "pointer");
          $(".industry-focus").click(function() {
            window.location.href = "/blog/industry-focus";
          });
        }
        if ($("h2").hasClass("news-and-events")) {
          $(".news-and-events").css("cursor", "pointer");
          $(".news-and-events").click(function() {
            window.location.href = "/blog/news-and-events";
          });
        }
        if ($("h2").hasClass("use-cases")) {
          $(".use-cases").css("cursor", "pointer");
          $(".use-cases").click(function() {
            window.location.href = "/blog/use-cases";
          });
        }
        if ($("h2").hasClass("analytics")) {
          $(".analytics").css("cursor", "pointer");
          $(".analytics").click(function() {
            window.location.href = "/blog/analytics";
          });
        }
        if ($("h2").hasClass("data")) {
          $(".data").css("cursor", "pointer");
          $(".data").click(function() {
            window.location.href = "/blog/data";
          });
        }

        // $(document).foundation();
        /* this was causing the console error foundation.min.js?v=1.x:1 Tried to initialize XXX on an element that already has a Foundation plugin. */

        /*START - OPEN VIDEO MODAL FROM EXTERNAL LINK + AUTOPLAY */

        /*Opening modal from external link reference
        (http://foundation.zurb.com/forum/posts/35072-how-to-launch-reveal-modal-from-external-link)*/
        function getQueryVariable(variable) {
          //var videoID =
          var query = window.location.search.substring(1);
          var vars = query.split("&");
          for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
              return pair[1];
            }
          }
          return false;
        }

        if (window.location.search) {
          var play = getQueryVariable("play");
          var showModal = getQueryVariable("showModal");
          var autoPlay = getQueryVariable("autoPlay");
          // alert('#'+play);
          if (showModal == "yes") {
            $("#" + play).foundation("open");
          }
        }
      });
    }
  };
  Drupal.behaviors.infobuildersOffCanvas = {
    attach: function(context, settings) {
      function setCookie(name, value, days) {
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          expires = "; expires=" + date.toUTCString();
        }
        var pathname = window.location.pathname; // Returns path only
        document.cookie =
          name + "=" + (value || "") + expires + "; path=" + pathname;
      }

      $(document).ready(function() {
        if ($(".path-frontpage")[0]) {
          //If homepage
          if ($.cookie("off-canvas-top-home") == null) {
            // Don't show if you've closed box and created cookie

            if ($(".off-canvas-top-and-hide-in-page")[0]) {
              $(".off-canvas-top-and-hide-in-page").insertAfter("#put-it-here");
              $(".off-canvas").addClass("is-open");
              $("#offCanvas a").addClass("oc-banner");
              $("a.oc-banner").attr(
                "href",
                $("a.oc-banner").attr("href") + "?utm_source=top_banner"
              );

              $(".close-button").click(function(e) {
                $("a.oc-banner").attr(
                  "href",
                  $("a.oc-banner")
                    .attr("href")
                    .split("?")[0]
                );
                $("#offCanvas a").removeClass("oc-banner");
                $(".off-canvas-top-and-hide-in-page").insertAfter(".return-me");
                setCookie("off-canvas-top-home", "no-show-home", 1);
              });
            }
            //Not working so well, disabling for now
            else if ($(".off-canvas-top-banner-only")[0]) {
              $(".off-canvas-top-banner-only").insertAfter("#put-it-here");
              $(".off-canvas").addClass("is-open");
              $(".close-button").click(function(e) {
                setCookie("off-canvas-top-home", "no-show-home", 1);
              });
            }
          }
        } else {
          //if anything other than home page

          if ($.cookie("off-canvas-top") == null) {
            // Don't show if you've closed box and created cookie

            if ($(".off-canvas-top-and-hide-in-page")[0]) {
              $(".off-canvas-top-and-hide-in-page").insertAfter("#put-it-here");
              $(".off-canvas").addClass("is-open");
              $("#offCanvas a").addClass("oc-banner");
              $("a.oc-banner").attr(
                "href",
                $("a.oc-banner").attr("href") + "?utm_source=top_banner"
              );

              $(".close-button").click(function(e) {
                $("a.oc-banner").attr(
                  "href",
                  $("a.oc-banner")
                    .attr("href")
                    .split("?")[0]
                );
                $("#offCanvas a").removeClass("oc-banner");
                $(".off-canvas-top-and-hide-in-page").insertAfter(".return-me");
                setCookie("off-canvas-top", "no-show", 1);
              });
            }
            //Not working so well, disabling for now
            else if ($(".off-canvas-top-banner-only")[0]) {
              $(".off-canvas-top-banner-only").insertAfter("#put-it-here");
              $(".off-canvas").addClass("is-open");
              $(".close-button").click(function(e) {
                setCookie("off-canvas-top", "no-show", 1);
                $(".off-canvas").removeClass("is-open");
              });
            }
          }
        }
      });
    }
  };

  Drupal.behaviors.infobuildersResponsive = {
    attach: function(context, settings) {
      // Move Navigation Button based on breakpoints
      var navButton = $(".m-menu--primary .m-menu-button");

      if (
        Foundation.MediaQuery.current == "small" ||
        Foundation.MediaQuery.current == "large"
      ) {
        navButton.detach();
        navButton.insertAfter(".m-menu-search");
      } else if (Foundation.MediaQuery.current == "medium") {
        navButton.detach();
        navButton.insertBefore(".m-menu-hamburger");
      }

      // Responsive Breakpoints
      $(window).on("changed.zf.mediaquery", function(event, newSize, oldSize) {
        // Responsive Small => Medium
        if (oldSize == "small" && newSize == "medium") {
          // Move Button
          navButton.detach();
          navButton.insertBefore(".m-menu-hamburger");
        }

        // Responsive Medium => Small
        if (oldSize == "medium" && newSize == "small") {
          // Move Button
          navButton.detach();
          navButton.insertAfter(".m-menu-search");
        }

        // Responsive Medium => Large
        if (oldSize == "medium" && newSize == "large") {
          // Hide Mobile Nav
          if ($("body").hasClass("nav-is-open")) {
            preventBodyScroll();
            initOverlay("white");
            initHamburgerAnimation();
            initMobileNav();
          }
          // Move Button
          navButton.detach();
          navButton.insertAfter(".m-menu-search");
        }

        // Responsive Large => Medium
        if (oldSize == "large" && newSize == "medium") {
          // Hide Large Search Block
          if ($("#site-search-link").hasClass("is-active")) {
            initOverlay();
            initSearchOverlay();
            preventBodyScroll();
            $("#site-search-link").toggleClass("is-active");
          }
          // Move Button
          navButton.detach();
          navButton.insertBefore(".m-menu-hamburger");
        }
      });
    }
  };

  Drupal.behaviors.infobuildersContactMessage = {
    attach: function(context, settings) {
      // If form exists...
      if ($(".contact-message-form", context).length) {
        // Hide text {- Select -} from showing up
        if ($(".m-input-group-field select", context).length) {
          $(".m-input-group-field select", context)
            .once("infobuildersContactMessage")
            .each(function() {
              $(this)
                .children("option:first")
                .text("");
            });
        }

        // Check if other select options are selected besides first option {- select -}
        $(".m-input-group-field select").on("change", function() {
          if (
            $(this)
              .children("option")
              .not(":first")
              .is(":selected")
          ) {
            $(this)
              .parents(".m-input-group-field")
              .addClass("is-filled");
          } else {
            $(this)
              .parents(".m-input-group-field")
              .removeClass("is-filled");
          }
        });

        // Check for input/textarea value
        $("input, textarea").each(function() {
          checkForInput(this);
        });
        $("input, textarea").on("change keyup", function() {
          checkForInput(this);
        });

        // On Focus
        $(
          ".m-input-group-field select, .m-input-group-field input, .m-input-group-field textarea"
        )
          .focus(function() {
            $(this)
              .parents(".m-input-group-field")
              .addClass("is-active");
          })
          .blur(function() {
            $(this)
              .parents(".m-input-group-field")
              .removeClass("is-active");
          });
      }
    }
  };

  Drupal.behaviors.infobuildersFilterSelect = {
    attach: function(context, settings) {
      if ($(".m-filter", context).length) {
        $(".m-filter", context)
          .once("init_custom_filter")
          .each(function() {
            init_custom_filter($(this));
            detectClick($(this));
          })
          .addClass("filter-processed");
      }
    }
  };

  Drupal.behaviors.infobuildersFilterList = {
    attach: function(context, settings) {
      if ($(".m-filter-list", context).length) {
        $(".m-filter-list", context)
          .once("init_filter_list")
          .each(function() {
            init_filter_list($(this));
          })
          .addClass("filter-list-processed");
      }
    }
  };

  Drupal.behaviors.infobuildersFilterDropdown = {
    attach: function(context, settings) {
      /*if ($(".m-filter", context).length) {
                $('.m-filter', context).once('init_filter_dropdown').each(function() {
                    init_filter_dropdown($(this));
                }).addClass('filter-processed');
            }*/
    }
  };

  Drupal.behaviors.infobuildersSlick = {
    attach: function(context, settings) {
      if ($(".m-testimonial", context).length) {
        $(".m-testimonial", context)
          .once("init_slick_carousel")
          .each(function() {
            init_slick_carousel($(this));
          })
          .addClass("slick-processed");
      }

      /* This is the new Customer No Line carousel style */
      if ($(".m-testimonialz", context).length) {
        $(".m-testimonialz", context)
          .once("init_slick_carouselz")
          .each(function() {
            init_slick_carouselz($(this));
          })
          .addClass("slick-processed");
      }
    }
  };

  Drupal.behaviors.infobuildersFeatureVideo = {
    attach: function(context, settings) {
      if ($("#feature-video", context).length) {
        var $featureTitle = $(".m-feature-title"),
          $featureContent = $(".m-feature-content");

        // Play Video
        $("#feature-video").trigger("play");

        // Find symbol to break up headlines and create break-line
        $featureTitle.each(function() {
          $(this).html(
            $(this)
              .text()
              .replace(/###/, "<br>")
          );
        });

        // Based on break-line wrap each headline into it's own text
        $featureTitle
          .contents()
          .filter(function() {
            return this.nodeType == 3;
          })
          .wrap("<span>");

        // Add class of headline-$ to each <span> found...
        $featureTitle.children("span").each(function(i) {
          $(this).attr("class", "headline-" + i);
        });

        setTimeout(function() {
          $featureContent.addClass("fade-in");
        }, 100);
      } else {
        // Let's reuse this break thingy for other head-titles, why not?
        var $featureTitle = $(".m-feature-title");
        if ($(".m-feature-title", context).length) {
          // Find symbol to break up headlines and create break-line
          $featureTitle.each(function() {
            $(this).html(
              $(this)
                .text()
                .replace(/###/, "<br>")
            );
          });
        }
      }
    }
  };

  // add source ordering classes for mobile to paragraphs with images
  Drupal.behaviors.infobuildersStackParagraphMobileImages = {
    attach: function(context, settings) {
      if ($(".column>.m-image").length !== 0) {
        // console.log("Found m-image");
        $(".column>.m-image")
          .parent()
          .addClass("has-image");
      }
    }
  };

  Drupal.behaviors.infobuildersHeaderBreak = {
    attach: function(context, settings) {
      if ($("body.page-sub-type-landing-unlimit", context).length) {
        var $featureTitle = $(".m-feature-title"),
          $featureContent = $(".m-feature-content");

        // Find symbol to break up headlines and create break-line
        $featureTitle.each(function() {
          $(this).html(
            $(this)
              .text()
              .replace(/###/, "<br>")
          );
        });

        // Based on break-line wrap each headline into it's own text
        $featureTitle
          .contents()
          .filter(function() {
            return this.nodeType == 3;
          })
          .wrap("<span>");

        // Add class of headline-$ to each <span> found...
        $featureTitle.children("span").each(function(i) {
          $(this).attr("class", "headline-" + i);
        });
        // Add SVG logo lockup
        $featureContent.append(
          '<div class="svg-logo"><svg xmlns="http://www.w3.org/2000/svg"  width="588" height="156" viewBox="0 0 588 156"> <image id="Vector_Smart_Object" data-name="Vector Smart Object" width="588" height="156" xlink:href="data:img/png;base64,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"/> </svg></div>'
        );
      }
      // if hero-spot campaign is iu, intelligence unlimited

      if ($(".hero-campaign--iu", context).length) {
        var $featureTitle = $(".m-feature-title"),
          $featureContent = $(".m-feature-content");

        $featureContent.addClass("fade-in");

        // Based on break-line wrap each headline into it's own text
        $featureTitle
          .contents()
          .filter(function() {
            return this.nodeType == 3;
          })
          .wrap("<span>");

        // Add class of headline-$ to each <span> found...
        $featureTitle.children("span").each(function(i) {
          $(this).attr("class", "headline-" + i);
        });
      }
      // if hero-spot campaign is as, At Scale

      if ($(".hero-campaign--as", context).length) {
        var $featureTitle = $(".m-feature-title"),
          $featureContent = $(".m-feature-content");

        $featureContent.addClass("fade-in");

        // Based on break-line wrap each headline into it's own text
        $featureTitle
          .contents()
          .filter(function() {
            return this.nodeType == 3;
          })
          .wrap("<span>");

        // Add class of headline-$ to each <span> found...
        $featureTitle.children("span").each(function(i) {
          $(this).attr("class", "headline-" + i);
        });
      }
    }
  };

  Drupal.behaviors.infobuildersEventsTabs = {
    attach: function(context, settings) {
      if ($("#event-tabs", context).length) {
        $("#event-tabs", context)
          .once("init_default_tabs")
          .each(function() {
            $("#event-tabs").foundation(
              "_openTab",
              $(this)
                .find("li")
                .eq(0)
            );
          })
          .addClass("tabs-processed");
      }
    }
  };

  Drupal.behaviors.infobuildersEventsTabsDropdown = {
    attach: function(context, settings) {
      if ($("#event-tabs", context).length) {
        if (Foundation.MediaQuery.current == "small") {
          if ($("#event-tabs > .tabs-title", context).length > 1) {
            $("#event-tabs")
              .prev(".tabs-title-bar")
              .addClass("is-visible");
            $("#event-tabs").addClass("tabs--dropdown is-hidden");

            $(".tabs-title-bar").click(function(e) {
              e.preventDefault();
              $(this)
                .next("#event-tabs")
                .toggleClass("is-hidden");
            });

            $(".tabs-title > a").click(function(e) {
              var newText = this.text;

              $(".tabs-title-bar .text").text(newText);
              $("#event-tabs").toggleClass("is-hidden");
            });
          } else {
            $("#event-tabs")
              .prev(".tabs-title-bar")
              .addClass("is-hidden");
          }
        } else {
          if ($("#event-tabs > .tabs-title", context).length > 3) {
            $("#event-tabs")
              .prev(".tabs-title-bar")
              .addClass("is-visible");
            $("#event-tabs").addClass("tabs--dropdown is-hidden");

            $(".tabs-title-bar").click(function(e) {
              e.preventDefault();
              $(this)
                .next("#event-tabs")
                .toggleClass("is-hidden");
            });

            $(".tabs-title > a").click(function(e) {
              var newText = this.text;

              $(".tabs-title-bar .text").text(newText);
              $("#event-tabs").toggleClass("is-hidden");
            });
          } else {
            $("#event-tabs")
              .prev(".tabs-title-bar")
              .addClass("is-hidden");
          }
        } // End of breakpoint if
      }
    }
  };

  Drupal.behaviors.infobuildersEventsMobileFormAnchor = {
    attach: function(context, settings) {
      if ($("#contact-message-event-registration-form", context).length) {
        if (Foundation.MediaQuery.current == "small") {
          var anchor_container = $(".form-anchor-button");
          var anchor_button = $(".form-anchor-button a");
          var navigation_offset = 138;

          if ($("#toolbar-administration").length) {
            navigation_offset = 170;
          }

          anchor_button.click(function(e) {
            e.preventDefault();

            var hash = this.hash;

            $("html, body").animate(
              {
                scrollTop: $(hash).offset().top - navigation_offset
              },
              800
            );
          });

          var element_position = $("#form-section").offset().top;
          var screen_height = $(window).height();
          var activation_offset = 0.5;
          var activation_point =
            element_position - screen_height * activation_offset;
          var max_scroll_height = $("body").height() - screen_height - 5;

          var y_scroll_pos = window.pageYOffset;

          var element_in_view = y_scroll_pos > activation_point;
          var has_reached_bottom_of_page =
            max_scroll_height <= y_scroll_pos && !element_in_view;

          if (element_in_view || has_reached_bottom_of_page) {
            anchor_container.addClass("is-hidden");
          } else {
            anchor_container.removeClass("is-hidden");
          }

          $(window).on("scroll", function() {
            y_scroll_pos = window.pageYOffset;
            element_in_view = y_scroll_pos > activation_point;
            has_reached_bottom_of_page =
              max_scroll_height <= y_scroll_pos && !element_in_view;

            if (element_in_view || has_reached_bottom_of_page) {
              anchor_container.addClass("is-hidden");
            } else {
              anchor_container.removeClass("is-hidden");
            }
          });
        }
      }
    }
  };

  function init_slick_carousel(el) {
    var $testimonialSettings = {
      dots: true,
      arrows: false,
      mobileFirst: true,
      speed: 500,
      infinite: false,
      slidesToShow: 1,
      // initialSlide: 2,
      autoplay: true,
      autoplaySpeed: 10000,
      // adaptiveHeight: true,

      responsive: [
        {
          breakpoint: 640,
          settings: {
            variableWidth: true,
            centerMode: true
          }
        }
      ]
    };

    $(el).slick($testimonialSettings);
  }

  function init_slick_carouselz(el) {
    var $testimonialSettingsz = {
      dots: false,
      arrows: true,
      nextArrow: '<i class="fas fa-chevron-right"></i></i>',
      prevArrow: '<i class="fas fa-chevron-left"></i></i>',

      mobileFirst: true,
      speed: 500,
      infinite: false,
      slidesToShow: 1,
      //initialSlide: 2,
      autoplay: true,
      autoplaySpeed: 10000,
      // adaptiveHeight: true,

      responsive: [
        {
          breakpoint: 640,
          settings: {
            variableWidth: true,
            centerMode: true
          }
        }
      ]
    };

    $(el).slick($testimonialSettingsz);

    $(".slick-slide").on("click", function(event) {
      //  console.log("You clicked on: ", event.target, "and paused me yo");
      $(".video-embed-field-responsive-video").toggleClass("click-thru");
      $(el).slick("slickPause");
    });
    $(".fas").click(function() {
      $(el).slick("slickPlay");
      $(".video-embed-field-responsive-video").removeClass("click-thru");
      // console.log("IM PLAYING AGAIN< LOOK MA!!");
    });
  }

  // Custom Selector
  function init_custom_filter(el) {
    var $trueSelect = $(el).find("select"),
      selectId = $trueSelect.attr("id"),
      selected = $("#" + selectId + "> option" + ":selected");
    var selectedText = selected.text(),
      selectedValue = selected.val();
    $trueSelect.attr("placeholder", selectedText);
    var $placeholder = $trueSelect.attr("placeholder"),
      $options = $trueSelect.children(),
      $trigger = $(el).find(".m-filter-button"),
      $customOptions = $(el).find(".m-filter-select-list");

    // Init placeholder + values
    $trigger.append($placeholder);

    // Trigger class (.is-triggered)
    $trigger.on("click", function(e) {
      e.preventDefault();
      $(".m-filter-select").removeClass("is-active");
      $(this)
        .parent(".m-filter-select")
        .toggleClass("is-active");
    });

    if (selectedValue === "All") {
      $options.slice(1).each(function() {
        $customOptions.append(
          '<li class="m-filter-select-list-item" data-value="' +
            $(this).val() +
            '">' +
            $(this).html() +
            "</li>"
        );
      });
    } else {
      $options.each(function() {
        var value = $(this).attr("value");
        if (value !== selectedValue) {
          $customOptions.append(
            '<li class="m-filter-select-list-item" data-value="' +
              $(this).val() +
              '">' +
              $(this).html() +
              "</li>"
          );
        }
      });
    }
    // Behind the scenes to change actual select / options
    $(el)
      .find(".m-filter-select-list-item")
      .off("click")
      .on("click", function(e) {
        e.preventDefault();
        $(this)
          .parents(".m-filter-select")
          .prev(".form-item")
          .find("select")
          .val($(this).data("value"));
        $(this)
          .parents(".m-filter-select-list")
          .find(".m-filter-select-list-item")
          .removeClass("is-selected");
        $(this).addClass("is-selected");
        $(".m-filter-select").removeClass("is-active");
        $(this)
          .parents(".m-filter-button")
          .removeClass("is-open");
        $(this)
          .parents(".m-filter-select")
          .find($trigger)
          .text($(this).text());

        $(this)
          .parents("form")
          .find(".form-submit")
          .click();
      });

    // If more than 4 options
    // Add overflow: scroll
    if ($options.length > 6) {
      $(el)
        .parent()
        .find(".m-filter-select-list")
        .addClass("is-scrollable");
    }
  }

  function detectClick(el) {
    // Hide when click anywhere outside of these containers
    $(document).mouseup(function(e) {
      var $trigger = $(el).find(".m-filter-button");
      if (!$trigger.is(e.target) && $trigger.has(e.target).length === 0) {
        $trigger.parent().removeClass("is-active");
      }
      if (!$(el).is(e.target) && $(el).has(e.target).length === 0) {
        $(el)
          .children("a")
          .removeClass("is-open")
          .next()
          .addClass("is-collapsed")
          .parent()
          .toggleClass("is-active");
      }
    });
  }

  // Prevent body from being scrollable...
  function preventBodyScroll() {
    $("body").toggleClass("is-unscrollable");
  }

  // Init Overlay background
  function initOverlay($color) {
    // if no color is called use purple
    if ($color == undefined) {
      $color = "secondary";
    }
    $(".m-overlay").toggleClass("m-overlay--" + $color);
    $(".m-overlay").toggleClass("is-active");
  }

  // Init Search Overlay
  function initSearchOverlay() {
    $(".m-search").toggleClass("is-active");
  }

  // Init Hamburger icon
  function initHamburgerAnimation() {
    $(".i-hamburger").toggleClass("is-active");
  }

  // Init Mobile Nav
  function initMobileNav() {
    $("body").toggleClass("nav-is-open");
    $(".m-header-right").toggleClass("is-active");
  }

  // Init Filter Dropdown
  function init_filter_dropdown(el) {
    return;
    $(el)
      .find("a")
      .on("click", function(event) {
        event.preventDefault();
        $(this)
          .toggleClass("is-open")
          .next()
          .toggleClass("is-collapsed");
        $(this)
          .parent()
          .siblings(".m-filter")
          .children("a")
          .removeClass("is-open")
          .next()
          .addClass("is-collapsed");
      });

    detectClick(el);
  }

  // Init Filter List
  function init_filter_list(el) {
    var $checkboxes = $(el).find('.m-filter-label[type="checkbox"]');
    $checkboxes.change(function() {
      var countCheckedCheckboxes = $checkboxes.filter(":checked").length;
      $(".checkbox-counter").text(countCheckedCheckboxes);
    });
  }

  // Check for input has value
  function checkForInput(element) {
    var $inputContainer = $(element).parents(".m-input-group-field");

    if ($(element).val().length > 0) {
      $inputContainer.addClass("is-filled");
    } else {
      $inputContainer.removeClass("is-filled");
    }
  }

  // Unslick at Small Breakpoint
  function unSlickSmall($slick, slickSettings) {
    $(window).on("resize", function() {
      if (Foundation.MediaQuery.current == "small") {
        if ($slick.hasClass("slick-initialized")) {
          $slick.slick("unslick");
        }
        return;
      }

      if (!$slick.hasClass("slick-initialized")) {
        return $slick.slick(slickSettings);
      }
    });
  }

  // Unslick at Medium Breakpoint
  function unSlickLarge($slick, slickSettings) {
    $(window).on("resize", function() {
      if (Foundation.MediaQuery.atLeast("medium")) {
        if ($slick.hasClass("slick-initialized")) {
          $slick.slick("unslick");
        }
        return;
      }

      if (!$slick.hasClass("slick-initialized")) {
        return $slick.slick(slickSettings);
      }
    });
  }

  /*function getVideoSrc(id) {
        if (window.video_embed != undefined) {
            if (window.video_embed.videos.length) {
                $.each(window.video_embed.videos, function() {

                });

                return window.video_embed.videos[id].src;
            }
        }
    }*/

  /* DETECT FOR IE 11 */

  function GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
    if (Idx > 0)
      return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;
    else return 0; //It is not IE
  }

  if (GetIEVersion() > 0)
    //  alert("This is IE " + GetIEVersion());
    $(
      '<div class="zurb-foundation-callout callout success" data-closable="fade-out"> Your Browser, IE ' +
        GetIEVersion() +
        ', is not supported. Please use Chrome or Safari for best results.<button class="close-button" aria-label="Dismiss alert" type="button" data-close=""><span aria-hidden="true">×</span></button></div>'
    ).appendTo(".ie-error");
  // alert("This is not IE, SUCKA.");
  else
    $(document).ajaxComplete(function(evt, xhr, ajaxOptions) {
      if (xhr.status && xhr.status === 200) {
        var ajaxLoader = $(".ajax-progress");
        if (ajaxLoader && ajaxLoader.length) {
          ajaxLoader.each(function() {
            if ($(this).is(":visible")) {
              $(this).hide();
            }
          });
        }
      }
    });
})(jQuery, Drupal);
