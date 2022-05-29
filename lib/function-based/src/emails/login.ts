import { FROM_EMAIL_VERIFY, mailgunClient, MAILGUN_DOMAIN } from '../config/email'

const LoginEmail = async (to: string, otp: string | number) => {
  const data = {
    // Specify email data
    from: FROM_EMAIL_VERIFY,
    // The email to contact
    to: to,
    // Subject and text data
    subject: 'OTP For Login - Bright DiGi Gold',
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <meta charset="UTF-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="telephone=no" name="format-detection" />
        <title></title>
        <style>
          #outlook a {
            padding: 0;
          }
    
          .ExternalClass {
            width: 100%;
          }
    
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
            line-height: 100%;
          }
    
          .es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
          }
    
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }
    
          .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
          }
    
          [data-ogsb] .es-button {
            border-width: 0 !important;
            padding: 15px 25px 15px 25px !important;
          }
    
          /*
    END OF IMPORTANT
    */
    
          s {
            text-decoration: line-through;
          }
    
          html,
          body {
            width: 100%;
            font-family: lato, "helvetica neue", helvetica, arial, sans-serif;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
    
          table {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse;
            border-spacing: 0px;
          }
    
          table td,
          html,
          body,
          .es-wrapper {
            padding: 0;
            margin: 0;
          }
    
          .es-content,
          .es-header,
          .es-footer {
            table-layout: fixed !important;
            width: 100%;
          }
    
          img {
            display: block;
            border: 0;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
          }
    
          table tr {
            border-collapse: collapse;
          }
    
          p,
          hr {
            margin: 0;
          }
    
          h1,
          h2,
          h3,
          h4,
          h5 {
            margin: 0;
            line-height: 120%;
            mso-line-height-rule: exactly;
            font-family: lato, "helvetica neue", helvetica, arial, sans-serif;
          }
    
          p,
          ul li,
          ol li,
          a {
            -webkit-text-size-adjust: none;
            -ms-text-size-adjust: none;
            mso-line-height-rule: exactly;
          }
    
          .es-left {
            float: left;
          }
    
          .es-right {
            float: right;
          }
    
          .es-p5 {
            padding: 5px;
          }
    
          .es-p5t {
            padding-top: 5px;
          }
    
          .es-p5b {
            padding-bottom: 5px;
          }
    
          .es-p5l {
            padding-left: 5px;
          }
    
          .es-p5r {
            padding-right: 5px;
          }
    
          .es-p10 {
            padding: 10px;
          }
    
          .es-p10t {
            padding-top: 10px;
          }
    
          .es-p10b {
            padding-bottom: 10px;
          }
    
          .es-p10l {
            padding-left: 10px;
          }
    
          .es-p10r {
            padding-right: 10px;
          }
    
          .es-p15 {
            padding: 15px;
          }
    
          .es-p15t {
            padding-top: 15px;
          }
    
          .es-p15b {
            padding-bottom: 15px;
          }
    
          .es-p15l {
            padding-left: 15px;
          }
    
          .es-p15r {
            padding-right: 15px;
          }
    
          .es-p20 {
            padding: 20px;
          }
    
          .es-p20t {
            padding-top: 20px;
          }
    
          .es-p20b {
            padding-bottom: 20px;
          }
    
          .es-p20l {
            padding-left: 20px;
          }
    
          .es-p20r {
            padding-right: 20px;
          }
    
          .es-p25 {
            padding: 25px;
          }
    
          .es-p25t {
            padding-top: 25px;
          }
    
          .es-p25b {
            padding-bottom: 25px;
          }
    
          .es-p25l {
            padding-left: 25px;
          }
    
          .es-p25r {
            padding-right: 25px;
          }
    
          .es-p30 {
            padding: 30px;
          }
    
          .es-p30t {
            padding-top: 30px;
          }
    
          .es-p30b {
            padding-bottom: 30px;
          }
    
          .es-p30l {
            padding-left: 30px;
          }
    
          .es-p30r {
            padding-right: 30px;
          }
    
          .es-p35 {
            padding: 35px;
          }
    
          .es-p35t {
            padding-top: 35px;
          }
    
          .es-p35b {
            padding-bottom: 35px;
          }
    
          .es-p35l {
            padding-left: 35px;
          }
    
          .es-p35r {
            padding-right: 35px;
          }
    
          .es-p40 {
            padding: 40px;
          }
    
          .es-p40t {
            padding-top: 40px;
          }
    
          .es-p40b {
            padding-bottom: 40px;
          }
    
          .es-p40l {
            padding-left: 40px;
          }
    
          .es-p40r {
            padding-right: 40px;
          }
    
          .es-menu td {
            border: 0;
          }
    
          .es-menu td a img {
            display: inline-block !important;
          }
    
          /* END CONFIG STYLES */
    
          a {
            text-decoration: underline;
          }
    
          p,
          ul li,
          ol li {
            font-family: lato, "helvetica neue", helvetica, arial, sans-serif;
            line-height: 150%;
          }
    
          ul li,
          ol li {
            margin-bottom: 15px;
            margin-left: 0;
          }
    
          .es-menu td a {
            text-decoration: none;
            display: block;
            font-family: lato, "helvetica neue", helvetica, arial, sans-serif;
          }
    
          .es-wrapper {
            width: 100%;
            height: 100%;
            background-image: ;
            background-repeat: repeat;
            background-position: center top;
          }
    
          .es-wrapper-color {
            background-color: #f4f4f4;
          }
    
          .es-header {
            /* background-color: #0b4263; */
            background-image: ;
            background-repeat: repeat;
            background-position: center top;
          }
    
          .es-header-body {
            /* background-color: #0b4263; */
          }
    
          .es-header-body p,
          .es-header-body ul li,
          .es-header-body ol li {
            color: #666666;
            font-size: 14px;
          }
    
          .es-header-body a {
            color: #111111;
            font-size: 14px;
          }
    
          .es-content-body {
            background-color: #ffffff;
          }
    
          .es-content-body p,
          .es-content-body ul li,
          .es-content-body ol li {
            color: #666666;
            font-size: 18px;
          }
    
          .es-content-body a {
            color: #0b4263;
            font-size: 18px;
          }
    
          .es-footer {
            background-color: transparent;
            background-image: ;
            background-repeat: repeat;
            background-position: center top;
          }
    
          .es-footer-body {
            background-color: transparent;
          }
    
          .es-footer-body p,
          .es-footer-body ul li,
          .es-footer-body ol li {
            color: #666666;
            font-size: 14px;
          }
    
          .es-footer-body a {
            color: #111111;
            font-size: 14px;
          }
    
          .es-infoblock,
          .es-infoblock p,
          .es-infoblock ul li,
          .es-infoblock ol li {
            line-height: 120%;
            font-size: 12px;
            color: #cccccc;
          }
    
          .es-infoblock a {
            font-size: 12px;
            color: #cccccc;
          }
    
          h1 {
            font-size: 48px;
            font-style: normal;
            font-weight: normal;
            color: #111111;
          }
    
          h2 {
            font-size: 24px;
            font-style: normal;
            font-weight: normal;
            color: #111111;
          }
    
          h3 {
            font-size: 20px;
            font-style: normal;
            font-weight: normal;
            color: #111111;
          }
    
          .es-header-body h1 a,
          .es-content-body h1 a,
          .es-footer-body h1 a {
            font-size: 48px;
          }
    
          .es-header-body h2 a,
          .es-content-body h2 a,
          .es-footer-body h2 a {
            font-size: 24px;
          }
    
          .es-header-body h3 a,
          .es-content-body h3 a,
          .es-footer-body h3 a {
            font-size: 20px;
          }
    
          a.es-button,
          button.es-button {
            border-style: solid;
            border-color: #0b4263;
            border-width: 15px 25px 15px 25px;
            display: inline-block;
            background: #0b4263;
            border-radius: 2px;
            font-size: 20px;
            font-family: helvetica, "helvetica neue", arial, verdana, sans-serif;
            font-weight: normal;
            font-style: normal;
            line-height: 120%;
            color: #ffffff;
            text-decoration: none;
            width: auto;
            text-align: center;
          }
    
          .es-button-border {
            border-style: solid solid solid solid;
            border-color: #0b4263 #0b4263 #0b4263 #0b4263;
            background: #0b4263;
            border-width: 1px 1px 1px 1px;
            display: inline-block;
            border-radius: 2px;
            width: auto;
          }
    
          /* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
    
          @media only screen and (max-width: 600px) {
            p,
            ul li,
            ol li,
            a {
              line-height: 150% !important;
            }
            h1,
            h2,
            h3,
            h1 a,
            h2 a,
            h3 a {
              line-height: 120% !important;
            }
            h1 {
              font-size: 30px !important;
              text-align: center;
            }
            h2 {
              font-size: 26px !important;
              text-align: center;
            }
            h3 {
              font-size: 20px !important;
              text-align: center;
            }
            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
              font-size: 30px !important;
            }
            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
              font-size: 26px !important;
            }
            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
              font-size: 20px !important;
            }
            .es-menu td a {
              font-size: 16px !important;
            }
            .es-header-body p,
            .es-header-body ul li,
            .es-header-body ol li,
            .es-header-body a {
              font-size: 16px !important;
            }
            .es-content-body p,
            .es-content-body ul li,
            .es-content-body ol li,
            .es-content-body a {
              font-size: 16px !important;
            }
            .es-footer-body p,
            .es-footer-body ul li,
            .es-footer-body ol li,
            .es-footer-body a {
              font-size: 16px !important;
            }
            .es-infoblock p,
            .es-infoblock ul li,
            .es-infoblock ol li,
            .es-infoblock a {
              font-size: 12px !important;
            }
            *[class="gmail-fix"] {
              display: none !important;
            }
            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3 {
              text-align: center !important;
            }
            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3 {
              text-align: right !important;
            }
            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3 {
              text-align: left !important;
            }
            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
              display: inline !important;
            }
            .es-button-border {
              display: block !important;
            }
            a.es-button,
            button.es-button {
              font-size: 20px !important;
              display: block !important;
              border-width: 15px 25px 15px 25px !important;
            }
            .es-btn-fw {
              border-width: 10px 0px !important;
              text-align: center !important;
            }
            .es-adaptive table,
            .es-btn-fw,
            .es-btn-fw-brdr,
            .es-left,
            .es-right {
              width: 100% !important;
            }
            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
              width: 100% !important;
              max-width: 600px !important;
            }
            .es-adapt-td {
              display: block !important;
              width: 100% !important;
            }
            .adapt-img {
              width: 100% !important;
              height: auto !important;
            }
            .es-m-p0 {
              padding: 0px !important;
            }
            .es-m-p0r {
              padding-right: 0px !important;
            }
            .es-m-p0l {
              padding-left: 0px !important;
            }
            .es-m-p0t {
              padding-top: 0px !important;
            }
            .es-m-p0b {
              padding-bottom: 0 !important;
            }
            .es-m-p20b {
              padding-bottom: 20px !important;
            }
            .es-mobile-hidden,
            .es-hidden {
              display: none !important;
            }
            tr.es-desk-hidden,
            td.es-desk-hidden,
            table.es-desk-hidden {
              width: auto !important;
              overflow: visible !important;
              float: none !important;
              max-height: inherit !important;
              line-height: inherit !important;
            }
            tr.es-desk-hidden {
              display: table-row !important;
            }
            table.es-desk-hidden {
              display: table !important;
            }
            td.es-desk-menu-hidden {
              display: table-cell !important;
            }
            .es-menu td {
              width: 1% !important;
            }
            table.es-table-not-adapt,
            .esd-block-html table {
              width: auto !important;
            }
            table.es-social {
              display: inline-block !important;
            }
            table.es-social td {
              display: inline-block !important;
            }
          }
    
          /* END RESPONSIVE STYLES */
    
          .es-p-default {
            padding-top: 20px;
            padding-right: 30px;
            padding-bottom: 0px;
            padding-left: 30px;
          }
    
          .es-p-all-default {
            padding: 0px;
          }
        </style>
      </head>
    
      <body>
        <div class="es-wrapper-color">
          <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
              <v:fill type="tile" color="#f4f4f4"></v:fill>
            </v:background>
          <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
              <tr class="gmail-fix" height="0">
                <td>
                  <table
                    width="600"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          style="line-height: 1px; min-width: 600px"
                          height="0"
                        >
                          <img
                            src="https://tlr.stripocdn.email/content/guids/CABINET_837dc1d79e3a5eca5eb1609bfe9fd374/images/41521605538834349.png"
                            style="
                              display: block;
                              max-height: 0px;
                              min-height: 0px;
                              min-width: 600px;
                              width: 600px;
                            "
                            alt
                            width="600"
                            height="1"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td class="esd-email-paddings" valign="top">
                  <table
                    class="es-header"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="esd-stripe"
                          esd-custom-block-id="6339"
                          style="background: #0b4263"
                          align="center"
                        >
                          <table
                            class="es-header-body"
                            width="600"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="esd-structure es-p20t es-p10b es-p10r es-p10l"
                                  align="left"
                                >
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame"
                                          width="580"
                                          valign="top"
                                          align="center"
                                        >
                                          <table
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  class="esd-block-image es-p25t es-p25b es-p10r es-p10l"
                                                  align="center"
                                                  style="font-size: 0"
                                                >
                                                  <a href target="_blank">
                                                    <img
                                                      style="height: 80px"
                                                      alt=""
                                                      src="https://www.brightdigigold.com/logonew.png"
                                                       />
                                                  </a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    class="es-content"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="esd-stripe"
                          style="background-color: #0b4263"
                          esd-custom-block-id="6340"
                          bgcolor="#0b4263"
                          align="center"
                        >
                          <table
                            class="es-content-body"
                            style="background-color: transparent"
                            width="600"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tbody>
                              <tr>
                                <td class="esd-structure" align="left">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame"
                                          width="600"
                                          valign="top"
                                          align="center"
                                        >
                                          <table
                                            style="
                                              background-color: #ffffff;
                                              border-radius: 4px;
                                              border-collapse: separate;
                                            "
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                            bgcolor="#ffffff"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p35t es-p5b es-p30r es-p30l"
                                                  align="center"
                                                >
                                                  <h2>
                                                    Welcome To Bright DiGi Gold
                                                  </h2>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-spacer es-p5t es-p5b es-p20r es-p20l"
                                                  bgcolor="#ffffff"
                                                  align="center"
                                                  style="font-size: 0"
                                                >
                                                  <table
                                                    width="100%"
                                                    height="100%"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                    border="0"
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style="
                                                            border-bottom: 1px solid
                                                              #ffffff;
                                                            background: rgba(
                                                                0,
                                                                0,
                                                                0,
                                                                0
                                                              )
                                                              none repeat scroll 0%
                                                              0%;
                                                            height: 1px;
                                                            width: 100%;
                                                            margin: 0px;
                                                          "
                                                        ></td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    class="es-content"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td class="esd-stripe" align="center">
                          <table
                            class="es-content-body"
                            style="background-color: #ffffff"
                            width="600"
                            cellspacing="0"
                            cellpadding="0"
                            bgcolor="#ffffff"
                            align="center"
                          >
                            <tbody>
                              <tr>
                                <td class="esd-structure" align="left">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame"
                                          width="600"
                                          valign="top"
                                          align="center"
                                        >
                                          <table
                                            style="background-color: #ffffff"
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                            bgcolor="#ffffff"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-m-txt-l es-p20t es-p15b es-p30r es-p30l"
                                                  bgcolor="#ffffff"
                                                  align="left"
                                                >
                                                  <p>
                                                    Please enter the following otp
                                                    to login into your account.
                                                  </p>
    
                                                  <p
                                                    style="
                                                      font-size: 32px;
                                                      margin: 15px 0;
                                                    "
                                                  >
                                                    <strong>${otp}</strong>
                                                  </p>
    
                                                  <p>
                                                    We're here to help if you need
                                                    it.Visit the
                                                    <a
                                                      href="https://www.brightdigigold.com/contact"
                                                      style="
                                                        text-decoration: underline;
                                                      "
                                                      >Bright Digi Gold Support
                                                      Forum</a
                                                    >
                                                    for more info.
                                                  </p>
                                                  <p
                                                    style="
                                                      margin-top: 15px;
                                                      margin-bottom: 30px;
                                                    "
                                                  >
                                                    - Bright DiGi Gold
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    class="es-content"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="esd-stripe"
                          esd-custom-block-id="6344"
                          align="center"
                        >
                          <table
                            class="es-content-body"
                            width="600"
                            cellspacing="0"
                            cellpadding="0"
                            bgcolor="#ffffff"
                            align="center"
                          >
                            <tbody>
                              <tr>
                                <td class="esd-structure" align="left">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame"
                                          width="600"
                                          valign="top"
                                          align="center"
                                        >
                                          <table
                                            style="
                                              border-radius: 4px;
                                              border-collapse: separate;
                                              background: linear-gradient(
                                                180deg,
                                                #dfaa7b,
                                                #f5d79f
                                              );
                                            "
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                            bgcolor="#111111"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-m-txt-l es-p35t es-p30r es-p30l"
                                                  align="left"
                                                >
                                                  <h2 style="color: #ffffff">
                                                    Want to learn about Digital
                                                    Gold?<br />
                                                  </h2>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p20t es-p30r es-p30l es-m-txt-l"
                                                  align="left"
                                                >
                                                  <p>
                                                    We are here for all the
                                                    information you need to know.<br />
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p20t es-p40b es-p30r es-p30l"
                                                  esdev-links-color="#0b4263"
                                                  align="left"
                                                >
                                                  <a
                                                    target="_blank"
                                                    href="https://viewstripo.email/"
                                                    style="color: #0b4263"
                                                    >Click here to read our blog</a
                                                  >
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    class="es-content"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td class="esd-stripe" align="center">
                          <table
                            class="es-content-body"
                            style="background-color: transparent"
                            width="600"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tbody>
                              <tr>
                                <td class="esd-structure" align="left">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame"
                                          width="600"
                                          valign="top"
                                          align="center"
                                        >
                                          <table
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  class="esd-block-spacer es-p10t es-p20b es-p20r es-p20l"
                                                  align="center"
                                                  style="font-size: 0"
                                                >
                                                  <table
                                                    width="100%"
                                                    height="100%"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                    border="0"
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style="
                                                            border-bottom: 1px solid
                                                              #f4f4f4;
                                                            background: rgba(
                                                                0,
                                                                0,
                                                                0,
                                                                0
                                                              )
                                                              none repeat scroll 0%
                                                              0%;
                                                            height: 1px;
                                                            width: 100%;
                                                            margin: 0px;
                                                          "
                                                        ></td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    class="es-content"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="esd-stripe"
                          esd-custom-block-id="6341"
                          align="center"
                        >
                          <table
                            class="es-content-body"
                            style="
                              background: linear-gradient(180deg, #081a24, #0b4263);
                            "
                            width="600"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tbody>
                              <tr>
                                <td class="esd-structure" align="left">
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame"
                                          width="600"
                                          valign="top"
                                          align="center"
                                        >
                                          <table
                                            style="
                                              border-radius: 4px;
                                              border-collapse: separate;
                                            "
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p30t es-p30r es-p30l"
                                                  align="center"
                                                >
                                                  <h3 style="color: #fff">
                                                    Need more help?
                                                  </h3>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p30b es-p30r es-p30l"
                                                  esdev-links-color="#0b4263"
                                                  align="center"
                                                >
                                                  <a
                                                    target="_blank"
                                                    href="https://www.brightdigigold.com/contact"
                                                    style="color: #fff"
                                                    >We’re here, ready to talk</a
                                                  >
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    class="es-footer"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="esd-stripe"
                          esd-custom-block-id="6342"
                          align="center"
                        >
                          <table
                            class="es-footer-body"
                            width="600"
                            cellspacing="0"
                            cellpadding="0"
                            align="center"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="esd-structure es-p30t es-p30b es-p30r es-p30l"
                                  align="left"
                                >
                                  <table
                                    width="100%"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame"
                                          width="540"
                                          valign="top"
                                          align="center"
                                        >
                                          <table
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  align="left"
                                                  class="esd-block-text es-p25t"
                                                >
                                                  <p>
                                                    You received this email because
                                                    you just signed up for a new
                                                    account. If it looks weird,
                                                    <strong
                                                      ><a
                                                        class="view"
                                                        target="_blank"
                                                        href=""
                                                        >view it in your browser</a
                                                      ></strong
                                                    >.
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  align="left"
                                                  class="esd-block-text es-p25t"
                                                >
                                                  <p>
                                                    If these emails get annoying,
                                                    please feel free to&nbsp;<strong
                                                      ><a
                                                        target="_blank"
                                                        class="unsubscribe"
                                                        href
                                                        >unsubscribe</a
                                                      ></strong
                                                    >.
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p25t"
                                                  align="left"
                                                >
                                                  <p>
                                                    47 T/F SUKH VIHAR NEAR MANDIER
                                                    East Delhi, Delhi, India, 110051
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>
    
    `,
  }
  await mailgunClient.messages.create(MAILGUN_DOMAIN!, data)
}

export default LoginEmail