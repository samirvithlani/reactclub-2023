import React from "react";
import { Helmet } from "react-helmet";

export const Sidebar = () => {
    var style1 = {
        left: "0px; bottom: 0px"
    }
    var style2 ={
        left: "0px; width: 0px;"

    }
    var style3 ={
        top: "0px; height: 350px; right: 4px;"

    }
    var style4={
        top: "0px; height: 137px"

    }
  return (
    <>
    <Helmet>

    <link rel="icon" type="image/x-icon" href="../assets/img/favicon/favicon.ico" />

    
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />

    
    <link rel="stylesheet" href="../assets/vendor/fonts/boxicons.css" />

    
    <link rel="stylesheet" href="../assets/vendor/css/core.css" class="template-customizer-core-css" />
    <link rel="stylesheet" href="../assets/vendor/css/theme-default.css" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="../assets/css/demo.css" />

    
    <link rel="stylesheet" href="../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

    <link rel="stylesheet" href="../assets/vendor/libs/apex-charts/apex-charts.css" />

    
    </Helmet>
    <aside
      id="layout-menu"
      class="layout-menu menu-vertical menu bg-menu-theme"
      data-bg-class="bg-menu-theme"
    >
      <div class="app-brand demo">
        <a href="index.html" class="app-brand-link">
          <span class="app-brand-logo demo"></span>
          <span class="app-brand-text demo menu-text fw-bolder ms-2">
            Sneat
          </span>
        </a>

        <a
          href="javascript:void(0);"
          class="layout-menu-toggle menu-link text-large ms-auto d-xl-none"
        >
          <i class="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <div class="menu-inner-shadow"></div>

      <ul class="menu-inner py-1 ps ps--active-y">
        <li class="menu-item active">
          <a href="index.html" class="menu-link">
            <i class="menu-icon tf-icons bx bx-home-circle"></i>
            <div data-i18n="Analytics">Dashboard</div>
          </a>
        </li>

        <li class="menu-item">
          <a href="javascript:void(0);" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-layout"></i>
            <div data-i18n="Layouts">Layouts</div>
          </a>

          <ul class="menu-sub">
            <li class="menu-item">
              <a href="layouts-without-menu.html" class="menu-link">
                <div data-i18n="Without menu">Without menu</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="layouts-without-navbar.html" class="menu-link">
                <div data-i18n="Without navbar">Without navbar</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="layouts-container.html" class="menu-link">
                <div data-i18n="Container">Container</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="layouts-fluid.html" class="menu-link">
                <div data-i18n="Fluid">Fluid</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="layouts-blank.html" class="menu-link">
                <div data-i18n="Blank">Blank</div>
              </a>
            </li>
          </ul>
        </li>

        <li class="menu-header small text-uppercase">
          <span class="menu-header-text">Pages</span>
        </li>
        <li class="menu-item">
          <a href="javascript:void(0);" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-dock-top"></i>
            <div data-i18n="Account Settings">Account Settings</div>
          </a>
          <ul class="menu-sub">
            <li class="menu-item">
              <a href="pages-account-settings-account.html" class="menu-link">
                <div data-i18n="Account">Account</div>
              </a>
            </li>
            <li class="menu-item">
              <a
                href="pages-account-settings-notifications.html"
                class="menu-link"
              >
                <div data-i18n="Notifications">Notifications</div>
              </a>
            </li>
            <li class="menu-item">
              <a
                href="pages-account-settings-connections.html"
                class="menu-link"
              >
                <div data-i18n="Connections">Connections</div>
              </a>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <a href="javascript:void(0);" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-lock-open-alt"></i>
            <div data-i18n="Authentications">Authentications</div>
          </a>
          <ul class="menu-sub">
            <li class="menu-item">
              <a href="auth-login-basic.html" class="menu-link" target="_blank">
                <div data-i18n="Basic">Login</div>
              </a>
            </li>
            <li class="menu-item">
              <a
                href="auth-register-basic.html"
                class="menu-link"
                target="_blank"
              >
                <div data-i18n="Basic">Register</div>
              </a>
            </li>
            <li class="menu-item">
              <a
                href="auth-forgot-password-basic.html"
                class="menu-link"
                target="_blank"
              >
                <div data-i18n="Basic">Forgot Password</div>
              </a>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <a href="javascript:void(0);" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-cube-alt"></i>
            <div data-i18n="Misc">Misc</div>
          </a>
          <ul class="menu-sub">
            <li class="menu-item">
              <a href="pages-misc-error.html" class="menu-link">
                <div data-i18n="Error">Error</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="pages-misc-under-maintenance.html" class="menu-link">
                <div data-i18n="Under Maintenance">Under Maintenance</div>
              </a>
            </li>
          </ul>
        </li>

        <li class="menu-header small text-uppercase">
          <span class="menu-header-text">Components</span>
        </li>

        <li class="menu-item">
          <a href="cards-basic.html" class="menu-link">
            <i class="menu-icon tf-icons bx bx-collection"></i>
            <div data-i18n="Basic">Cards</div>
          </a>
        </li>

        <li class="menu-item">
          <a href="javascript:void(0)" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-box"></i>
            <div data-i18n="User interface">User interface</div>
          </a>
          <ul class="menu-sub">
            <li class="menu-item">
              <a href="ui-accordion.html" class="menu-link">
                <div data-i18n="Accordion">Accordion</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-alerts.html" class="menu-link">
                <div data-i18n="Alerts">Alerts</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-badges.html" class="menu-link">
                <div data-i18n="Badges">Badges</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-buttons.html" class="menu-link">
                <div data-i18n="Buttons">Buttons</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-carousel.html" class="menu-link">
                <div data-i18n="Carousel">Carousel</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-collapse.html" class="menu-link">
                <div data-i18n="Collapse">Collapse</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-dropdowns.html" class="menu-link">
                <div data-i18n="Dropdowns">Dropdowns</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-footer.html" class="menu-link">
                <div data-i18n="Footer">Footer</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-list-groups.html" class="menu-link">
                <div data-i18n="List Groups">List groups</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-modals.html" class="menu-link">
                <div data-i18n="Modals">Modals</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-navbar.html" class="menu-link">
                <div data-i18n="Navbar">Navbar</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-offcanvas.html" class="menu-link">
                <div data-i18n="Offcanvas">Offcanvas</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-pagination-breadcrumbs.html" class="menu-link">
                <div data-i18n="Pagination &amp; Breadcrumbs">
                  Pagination &amp; Breadcrumbs
                </div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-progress.html" class="menu-link">
                <div data-i18n="Progress">Progress</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-spinners.html" class="menu-link">
                <div data-i18n="Spinners">Spinners</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-tabs-pills.html" class="menu-link">
                <div data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-toasts.html" class="menu-link">
                <div data-i18n="Toasts">Toasts</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-tooltips-popovers.html" class="menu-link">
                <div data-i18n="Tooltips &amp; Popovers">
                  Tooltips &amp; popovers
                </div>
              </a>
            </li>
            <li class="menu-item">
              <a href="ui-typography.html" class="menu-link">
                <div data-i18n="Typography">Typography</div>
              </a>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a href="javascript:void(0)" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-copy"></i>
            <div data-i18n="Extended UI">Extended UI</div>
          </a>
          <ul class="menu-sub">
            <li class="menu-item">
              <a href="extended-ui-perfect-scrollbar.html" class="menu-link">
                <div data-i18n="Perfect Scrollbar">Perfect scrollbar</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="extended-ui-text-divider.html" class="menu-link">
                <div data-i18n="Text Divider">Text Divider</div>
              </a>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a href="icons-boxicons.html" class="menu-link">
            <i class="menu-icon tf-icons bx bx-crown"></i>
            <div data-i18n="Boxicons">Boxicons</div>
          </a>
        </li>

        <li class="menu-header small text-uppercase">
          <span class="menu-header-text">Forms &amp; Tables</span>
        </li>

        <li class="menu-item">
          <a href="javascript:void(0);" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Elements">Form Elements</div>
          </a>
          <ul class="menu-sub">
            <li class="menu-item">
              <a href="forms-basic-inputs.html" class="menu-link">
                <div data-i18n="Basic Inputs">Basic Inputs</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="forms-input-groups.html" class="menu-link">
                <div data-i18n="Input groups">Input groups</div>
              </a>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <a href="javascript:void(0);" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-detail"></i>
            <div data-i18n="Form Layouts">Form Layouts</div>
          </a>
          <ul class="menu-sub">
            <li class="menu-item">
              <a href="form-layouts-vertical.html" class="menu-link">
                <div data-i18n="Vertical Form">Vertical Form</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="form-layouts-horizontal.html" class="menu-link">
                <div data-i18n="Horizontal Form">Horizontal Form</div>
              </a>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a href="tables-basic.html" class="menu-link">
            <i class="menu-icon tf-icons bx bx-table"></i>
            <div data-i18n="Tables">Tables</div>
          </a>
        </li>

        <li class="menu-header small text-uppercase">
          <span class="menu-header-text">Misc</span>
        </li>
        <li class="menu-item">
          <a
            href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
            target="_blank"
            class="menu-link"
          >
            <i class="menu-icon tf-icons bx bx-support"></i>
            <div data-i18n="Support">Support</div>
          </a>
        </li>
        <li class="menu-item">
          <a
            href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
            target="_blank"
            class="menu-link"
          >
            <i class="menu-icon tf-icons bx bx-file"></i>
            <div data-i18n="Documentation">Documentation</div>
          </a>
        </li>
        <div class="ps__rail-x" style={style1}>
          <div
            class="ps__thumb-x"
            tabindex="0"
            style={style2}
          ></div>
        </div>
        <div class="ps__rail-y" style={style3}>
          <div
            class="ps__thumb-y"
            tabindex="0"
            style={style4}
          ></div>
        </div>
      </ul>
    </aside>
    </>
  );
};
