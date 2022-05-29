import { FROM_EMAIL_VERIFY, mailgunClient, MAILGUN_DOMAIN } from '../config/email'

const WelcomeEmail = async (to: string) => {
  const data = {
    // Specify email data
    from: FROM_EMAIL_VERIFY,
    // The email to contact
    to: to,
    // Subject and text data
    subject: 'Welcome to Bright DiGi Gold',
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
            padding: 10px 15px 10px 15px !important;
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
            font-family: arial, "helvetica neue", helvetica, sans-serif;
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
            font-family: arial, "helvetica neue", helvetica, sans-serif;
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
    
          /*
    END CONFIG STYLES
    */
    
          a {
            text-decoration: underline;
          }
    
          p,
          ul li,
          ol li {
            font-family: arial, "helvetica neue", helvetica, sans-serif;
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
            font-family: arial, "helvetica neue", helvetica, sans-serif;
          }
    
          .es-wrapper {
            width: 100%;
            height: 100%;
            background-image: ;
            background-repeat: repeat;
            background-position: center top;
          }
    
          .es-wrapper-color {
            background-color: #f7f7f7;
          }
    
          .es-header {
            background-color: transparent;
            background-image: ;
            background-repeat: repeat;
            background-position: center top;
          }
    
          .es-header-body {
            background-color: transparent;
          }
    
          .es-header-body p,
          .es-header-body ul li,
          .es-header-body ol li {
            color: #333333;
            font-size: 14px;
          }
    
          .es-header-body a {
            color: #3d5ca3;
            font-size: 14px;
          }
    
          .es-content-body {
            background-color: #ffffff;
          }
    
          .es-content-body p,
          .es-content-body ul li,
          .es-content-body ol li {
            color: #333333;
            font-size: 14px;
          }
    
          .es-content-body a {
            color: #3d5ca3;
            font-size: 14px;
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
            font-size: 12px;
          }
    
          .es-footer-body a {
            color: #666666;
            font-size: 12px;
          }
    
          .es-infoblock,
          .es-infoblock p,
          .es-infoblock ul li,
          .es-infoblock ol li {
            line-height: 120%;
            font-size: 11px;
            color: #999999;
          }
    
          .es-infoblock a {
            font-size: 11px;
            color: #3d5ca3;
          }
    
          h1 {
            font-size: 30px;
            font-style: normal;
            font-weight: normal;
            color: #333333;
          }
    
          h2 {
            font-size: 24px;
            font-style: normal;
            font-weight: normal;
            color: #333333;
          }
    
          h3 {
            font-size: 20px;
            font-style: normal;
            font-weight: normal;
            color: #333333;
          }
    
          .es-header-body h1 a,
          .es-content-body h1 a,
          .es-footer-body h1 a {
            font-size: 30px;
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
            border-color: #ffffff;
            border-width: 10px 15px 10px 15px;
            display: inline-block;
            background: #ffffff;
            border-radius: 4px;
            font-size: 16px;
            font-family: arial, "helvetica neue", helvetica, sans-serif;
            font-weight: normal;
            font-style: normal;
            line-height: 120%;
            color: #3d5ca3;
            text-decoration: none;
            width: auto;
            text-align: center;
          }
    
          .es-button-border {
            border-style: solid solid solid solid;
            border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3;
            background: #ffffff;
            border-width: 2px 2px 2px 2px;
            display: inline-block;
            border-radius: 4px;
            width: auto;
          }
    
          /*
    RESPONSIVE STYLES
    Please do not delete and edit CSS styles below.
     
    If you don't need responsive layout, please delete this section.
    */
    
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
              font-size: 40px !important;
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
            h1 a {
              text-align: center;
            }
            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
              font-size: 40px !important;
            }
            h2 a {
              text-align: center;
            }
            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
              font-size: 26px !important;
            }
            h3 a {
              text-align: center;
            }
            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
              font-size: 20px !important;
            }
            .es-menu td a {
              font-size: 14px !important;
            }
            .es-header-body p,
            .es-header-body ul li,
            .es-header-body ol li,
            .es-header-body a {
              font-size: 14px !important;
            }
            .es-content-body p,
            .es-content-body ul li,
            .es-content-body ol li,
            .es-content-body a {
              font-size: 14px !important;
            }
            .es-footer-body p,
            .es-footer-body ul li,
            .es-footer-body ol li,
            .es-footer-body a {
              font-size: 12px !important;
            }
            .es-infoblock p,
            .es-infoblock ul li,
            .es-infoblock ol li,
            .es-infoblock a {
              font-size: 11px !important;
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
              display: inline-block !important;
            }
            a.es-button,
            button.es-button {
              font-size: 18px !important;
              display: inline-block !important;
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
        </style>
      </head>
    
      <body>
        <div class="es-wrapper-color">
          <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
              <v:fill type="tile" color="#f7f7f7"></v:fill>
            </v:background>
          <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td class="esd-email-paddings" valign="top">
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    class="es-header"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="es-adaptive esd-stripe"
                          align="center"
                          esd-custom-block-id="88593"
                        >
                          <table
                            class="es-header-body"
                            style="background-color: #3d5ca3"
                            width="600"
                            cellspacing="0"
                            cellpadding="0"
                            bgcolor="#3d5ca3"
                            align="center"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="esd-structure es-p20t es-p20b es-p20r es-p20l"
                                  style="
                                    background: linear-gradient(
                                      180deg,
                                      #081a24,
                                      #0b4263
                                    );
                                  "
                                  align="left"
                                >
                                  <!--[if mso]><table width="560" cellpadding="0" 
                            cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
                                  <table
                                    class="es-left"
                                    cellspacing="0"
                                    cellpadding="0"
                                    align="left"
                                    style="width: 100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="es-m-p20b esd-container-frame"
                                          width="270"
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
                                                  class="esd-block-image es-m-p0l es-m-txt-c"
                                                  align="left"
                                                  style="font-size: 0"
                                                >
                                                  <a
                                                    href="https://www.brightdigigold.com"
                                                    target="_blank"
                                                  >
                                                    <img style="height: 80px;
                                                    margin: 0 auto;" alt=""
                                                    src="https://www.brightdigigold.com/logonew.png"
                                                  </a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
    
                                  <!--[if mso]></td></tr></table><![endif]-->
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
                            style="background-color: #fafafa"
                            width="600"
                            cellspacing="0"
                            cellpadding="0"
                            bgcolor="#fafafa"
                            align="center"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="esd-structure es-p20t es-p40b es-p20r es-p20l"
                                  style="background-repeat: no-repeat"
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
                                          width="560"
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
                                                  class="esd-block-text es-p20t es-p10b"
                                                  align="center"
                                                >
                                                  <h1
                                                    style="
                                                      color: #333333;
                                                      font-family: lora, georgia,
                                                        'times new roman', serif;
                                                      font-size: 50px;
                                                    "
                                                  >
                                                    <em>Welcome</em>
                                                  </h1>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p10t es-p10b"
                                                  align="center"
                                                >
                                                  <h4 style="color: #333333">
                                                    We're happy to have you with us.
                                                  </h4>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p20b"
                                                  align="center"
                                                >
                                                  <p>
                                                    We teach classes in everything
                                                    from business to medicine.
                                                  </p>
                                                  <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna.
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
                        <td class="esd-stripe" align="center">
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
                                <td
                                  class="esd-structure es-p30t es-p5b es-p20r es-p20l"
                                  style="
                                    background-color: #ffffff;
                                    background-repeat: no-repeat;
                                  "
                                  bgcolor="#ffffff"
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
                                          width="560"
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
                                                  class="esd-block-text"
                                                  align="center"
                                                >
                                                  <h3 style="color: #3d5ca3">
                                                    Here's how to get started:
                                                  </h3>
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
                              <tr>
                                <td
                                  class="esd-structure es-p20t es-p20r es-p20l"
                                  esd-custom-block-id="10615"
                                  align="left"
                                >
                                  <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="265" valign="top"><![endif]-->
                                  <table
                                    class="es-left"
                                    cellspacing="0"
                                    cellpadding="0"
                                    align="left"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame es-m-p20b"
                                          esd-custom-block-id="10616"
                                          width="255"
                                          align="left"
                                          esd-dynamic-block='{"link":{"blockMapping":[{"selector":"a","attribute":"href"}]},"variables":[{"variable":"b_title","name":"Title","blockMapping":[{"selector":".esd-block-text h4"},{"selector":".esd-block-image a img","attribute":"title"},{"selector":".esd-block-image a img","attribute":"alt"}],"externalMapping":{"pageSelector":{"selector":""},"modifier":{"regexs":[]}}},{"variable":"b_description","name":"Description","blockMapping":[{"selector":".esd-block-text .product-description"}],"externalMapping":{"pageSelector":{"selector":""},"modifier":{"regexs":[]}}},{"variable":"b_image","name":"Image","blockMapping":[{"selector":".esd-block-image img","attribute":"src"}],"externalMapping":{"pageSelector":{"selector":""},"modifier":{"regexs":[]}}}]}'
                                        >
                                          <table
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  class="esd-block-image es-p15t es-p5b"
                                                  align="center"
                                                  style="font-size: 0"
                                                >
                                                  <a
                                                    target="_blank"
                                                    href="https://www.brightdigigold.com"
                                                    ><img
                                                      src="https://tlr.stripocdn.email/content/guids/CABINET_172236130180b7a4d5e1d9987369ca61/images/40281527675753663.png"
                                                      alt="Fill out a profile"
                                                      style="display: block"
                                                      title="Fill out a profile"
                                                      width="39"
                                                  /></a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p5t es-p5b"
                                                  align="center"
                                                >
                                                  <h4 style="color: #333333">
                                                    Fill out a profile
                                                  </h4>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text"
                                                  align="center"
                                                >
                                                  <p>
                                                    <span
                                                      class="product-description"
                                                      >Quis autem vel eum iure
                                                      reprehenderit qui in ea
                                                      voluptate velit esse quam
                                                      nihil molestiae
                                                      consequatur.</span
                                                    ><br />
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p5t"
                                                  align="center"
                                                >
                                                  <p>
                                                    <a
                                                      target="_blank"
                                                      href="https://www.brightdigigold.com"
                                                      >Read more »</a
                                                    >
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                        <td class="es-hidden" width="10"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if mso]></td><td width="30" valign="top"><![endif]-->
                                  <table
                                    class="es-left"
                                    cellspacing="0"
                                    cellpadding="0"
                                    align="left"
                                  >
                                    <tbody>
                                      <tr class="es-hidden">
                                        <td
                                          class="esd-container-frame es-m-p20b"
                                          width="30"
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
                                                  class="esd-block-image"
                                                  align="center"
                                                  style="font-size: 0"
                                                >
                                                  <a target="_blank"
                                                    ><img
                                                      src="https://tlr.stripocdn.email/content/guids/CABINET_172236130180b7a4d5e1d9987369ca61/images/47561527672335572.png"
                                                      alt
                                                      style="display: block"
                                                      width="30"
                                                  /></a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if mso]></td><td width="10"></td><td width="255" valign="top"><![endif]-->
                                  <table
                                    class="es-right"
                                    cellspacing="0"
                                    cellpadding="0"
                                    align="right"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame es-m-p20b"
                                          width="255"
                                          align="left"
                                          esd-dynamic-block='{"link":{"blockMapping":[{"selector":"a","attribute":"href"}]},"variables":[{"variable":"b_title","name":"Title","blockMapping":[{"selector":".esd-block-text h4"},{"selector":".esd-block-image a img","attribute":"title"},{"selector":".esd-block-image a img","attribute":"alt"}],"externalMapping":{"pageSelector":{"selector":""},"modifier":{"regexs":[]}}},{"variable":"b_description","name":"Description","blockMapping":[{"selector":".esd-block-text .product-description"}],"externalMapping":{"pageSelector":{"selector":""},"modifier":{"regexs":[]}}},{"variable":"b_image","name":"Image","blockMapping":[{"selector":".esd-block-image img","attribute":"src"}],"externalMapping":{"pageSelector":{"selector":""},"modifier":{"regexs":[]}}}]}'
                                        >
                                          <table
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  class="esd-block-image es-p15t es-p5b"
                                                  align="center"
                                                  style="font-size: 0"
                                                >
                                                  <a
                                                    target="_blank"
                                                    href="https://www.brightdigigold.com"
                                                    ><img
                                                      src="https://tlr.stripocdn.email/content/guids/CABINET_172236130180b7a4d5e1d9987369ca61/images/53701527675683912.png"
                                                      alt="Use planning tool"
                                                      style="display: block"
                                                      title="Use planning tool"
                                                      width="39"
                                                  /></a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p5t es-p5b"
                                                  align="center"
                                                >
                                                  <h4 style="color: #333333">
                                                    Use planning tool
                                                  </h4>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text"
                                                  align="center"
                                                >
                                                  <p>
                                                    <span
                                                      class="product-description"
                                                      >Duis aute irure dolor in
                                                      reprehenderit in voluptate
                                                      velit esse cillum dolore eu
                                                      fugiat nulla pariatur.</span
                                                    ><br />
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p5t"
                                                  align="center"
                                                >
                                                  <p>
                                                    <a
                                                      target="_blank"
                                                      href="https://www.brightdigigold.com"
                                                      >Read more »</a
                                                    >
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if mso]></td></tr></table><![endif]-->
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="esd-structure es-p20r es-p20l"
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
                                          width="560"
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
                                                  class="esd-block-spacer"
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
                                                              #cccccc;
                                                            background: none;
                                                            height: 1px;
                                                            width: 100%;
                                                            margin: 0px 0px 0px 0px;
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
                              <tr>
                                <td
                                  class="esd-structure es-p20b es-p20r es-p20l"
                                  align="left"
                                >
                                  <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="265" valign="top"><![endif]-->
                                  <table
                                    class="es-left"
                                    cellspacing="0"
                                    cellpadding="0"
                                    align="left"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame es-m-p20b"
                                          width="255"
                                          align="left"
                                          esd-dynamic-block='{"link":{"blockMapping":[{"selector":"a","attribute":"href"}]},"variables":[{"variable":"b_title","name":"Title","blockMapping":[{"selector":".esd-block-text h4"},{"selector":".esd-block-image a img","attribute":"title"},{"selector":".esd-block-image a img","attribute":"alt"}],"externalMapping":{"pageSelector":{"selector":""},"modifier":{"regexs":[]}}},{"variable":"b_description","name":"Description","blockMapping":[{"selector":".esd-block-text .product-description"}],"externalMapping":{"pageSelector":{"selector":""},"modifier":{"regexs":[]}}},{"variable":"b_image","name":"Image","blockMapping":[{"selector":".esd-block-image img","attribute":"src"}],"externalMapping":{"pageSelector":{"selector":""},"modifier":{"regexs":[]}}}]}'
                                        >
                                          <table
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  class="esd-block-image es-p25t es-p5b"
                                                  align="center"
                                                  style="font-size: 0"
                                                >
                                                  <a
                                                    target="_blank"
                                                    href="https://www.brightdigigold.com"
                                                    ><img
                                                      src="https://tlr.stripocdn.email/content/guids/CABINET_172236130180b7a4d5e1d9987369ca61/images/93981527675754800.png"
                                                      alt="Change settings"
                                                      style="display: block"
                                                      title="Change settings"
                                                      width="39"
                                                  /></a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p5t es-p5b"
                                                  align="center"
                                                >
                                                  <h4 style="color: #333333">
                                                    Change settings
                                                  </h4>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text"
                                                  align="center"
                                                >
                                                  <p>
                                                    <span
                                                      class="product-description"
                                                      >Unknown printer took a galley
                                                      of type and scrambled it to
                                                      make a type specimen
                                                      book.</span
                                                    >
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p5t"
                                                  align="center"
                                                >
                                                  <p>
                                                    <a
                                                      target="_blank"
                                                      href="https://www.brightdigigold.com"
                                                      >Read more »</a
                                                    ><br />
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                        <td class="es-hidden" width="10"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if mso]></td><td width="30" valign="top"><![endif]-->
                                  <table
                                    class="es-left"
                                    cellspacing="0"
                                    cellpadding="0"
                                    align="left"
                                  >
                                    <tbody>
                                      <tr class="es-hidden">
                                        <td
                                          class="esd-container-frame es-m-p20b"
                                          width="30"
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
                                                  class="esd-block-image"
                                                  align="center"
                                                  style="font-size: 0"
                                                >
                                                  <a target="_blank"
                                                    ><img
                                                      src="https://tlr.stripocdn.email/content/guids/CABINET_172236130180b7a4d5e1d9987369ca61/images/47561527672335572.png"
                                                      alt
                                                      style="display: block"
                                                      width="30"
                                                  /></a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if mso]></td><td width="10"></td><td width="255" valign="top"><![endif]-->
                                  <table
                                    class="es-right"
                                    cellspacing="0"
                                    cellpadding="0"
                                    align="right"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame"
                                          width="255"
                                          align="left"
                                          esd-dynamic-block='{"link":{"blockMapping":[{"selector":"a","attribute":"href"}]},"variables":[{"variable":"b_title","name":"Title","blockMapping":[{"selector":".esd-block-text h4"},{"selector":".esd-block-image a img","attribute":"title"},{"selector":".esd-block-image a img","attribute":"alt"}],"externalMapping":{"pageSelector":{"selector":""},"modifier":{"regexs":[]}}},{"variable":"b_description","name":"Description","blockMapping":[{"selector":".esd-block-text .product-description"}],"externalMapping":{"pageSelector":{"selector":""},"modifier":{"regexs":[]}}},{"variable":"b_image","name":"Image","blockMapping":[{"selector":".esd-block-image img","attribute":"src"}],"externalMapping":{"pageSelector":{"selector":""},"modifier":{"regexs":[]}}}]}'
                                        >
                                          <table
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  class="esd-block-image es-p25t es-p5b"
                                                  align="center"
                                                  style="font-size: 0"
                                                >
                                                  <a
                                                    target="_blank"
                                                    href="https://www.brightdigigold.com"
                                                    ><img
                                                      src="https://tlr.stripocdn.email/content/guids/CABINET_172236130180b7a4d5e1d9987369ca61/images/33081527675753787.png"
                                                      alt="Invite friends"
                                                      style="display: block"
                                                      title="Invite friends"
                                                      width="39"
                                                  /></a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p5t es-p5b"
                                                  align="center"
                                                >
                                                  <h4 style="color: #333333">
                                                    Invite friends
                                                  </h4>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text"
                                                  align="center"
                                                >
                                                  <p>
                                                    <span
                                                      class="product-description"
                                                      >Lorem ipsum dolor sit amet,
                                                      consectetur adipiscing elit,
                                                      sed do eiusmod tempor
                                                      incididunt ut labore et dolore
                                                      magna.</span
                                                    >
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p5t"
                                                  align="center"
                                                >
                                                  <p>
                                                    <a
                                                      target="_blank"
                                                      href="https://www.brightdigigold.com"
                                                      >Read more »</a
                                                    >
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if mso]></td></tr></table><![endif]-->
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="esd-structure es-p10t es-p30b es-p20r es-p20l"
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
                                          width="560"
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
                                                  class="esd-block-button"
                                                  align="center"
                                                >
                                                  <span class="es-button-border"
                                                    ><a
                                                      href="https://www.brightdigigold.com"
                                                      class="es-button"
                                                      target="_blank"
                                                      >Let's get started »</a
                                                    ></span
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
                    class="es-content"
                    align="center"
                  >
                    <tbody>
                      <tr>
                        <td
                          class="esd-stripe"
                          align="center"
                          esd-custom-block-id="88591"
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
                                <td
                                  class="esd-structure es-p15t es-p15b es-p10r es-p10l"
                                  style="
                                    background: linear-gradient(
                                      180deg,
                                      #dfaa7b,
                                      #f5d79f
                                    );
                                  "
                                  bgcolor="#f7c052"
                                  align="left"
                                >
                                  <!--[if mso]><table width="580" cellpadding="0" 
                                cellspacing="0"><tr><td width="200" valign="top"><![endif]-->
                                  <table
                                    class="es-left"
                                    cellspacing="0"
                                    cellpadding="0"
                                    align="left"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="es-m-p0r es-m-p20b esd-container-frame"
                                          width="180"
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
                                                  class="esd-block-image es-p5b"
                                                  align="center"
                                                  style="font-size: 0"
                                                >
                                                  <a target="_blank"
                                                    ><img
                                                      src="https://tlr.stripocdn.email/content/guids/CABINET_66498ea076b5d00c6f9553055acdb37a/images/39911527588288171.png"
                                                      alt
                                                      style="display: block"
                                                      width="24"
                                                  /></a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text es-p5r es-p5l"
                                                  align="center"
                                                >
                                                  <p
                                                    style="
                                                      color: #ffffff;
                                                      font-size: 12px;
                                                    "
                                                  >
                                                    47 T/F SUKH VIHAR NEAR MANDIER
                                                    East Delhi, Delhi, India, 110051
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                        <td class="es-hidden" width="20"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if mso]></td><td width="180" valign="top"><![endif]-->
                                  <table
                                    class="es-left"
                                    cellspacing="0"
                                    cellpadding="0"
                                    align="left"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="es-m-p20b esd-container-frame"
                                          width="180"
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
                                                  class="esd-block-image es-p5b"
                                                  align="center"
                                                  style="font-size: 0"
                                                >
                                                  <a target="_blank"
                                                    ><img
                                                      src="https://tlr.stripocdn.email/content/guids/CABINET_66498ea076b5d00c6f9553055acdb37a/images/35681527588356492.png"
                                                      alt
                                                      style="display: block"
                                                      width="24"
                                                  /></a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  esdev-links-color="#ffffff"
                                                  class="esd-block-text"
                                                  align="center"
                                                >
                                                  <p style="color: #ffffff">
                                                    <a
                                                      target="_blank"
                                                      style="
                                                        color: #ffffff;
                                                        font-size: 12px;
                                                      "
                                                      href="mailto:your@mail.com"
                                                      >connect@brightdigitalgold.com</a
                                                    >
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if mso]></td><td width="20"></td><td width="180" valign="top"><![endif]-->
                                  <table
                                    class="es-right"
                                    cellspacing="0"
                                    cellpadding="0"
                                    align="right"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame"
                                          width="180"
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
                                                  class="esd-block-image es-p5b"
                                                  align="center"
                                                  style="font-size: 0"
                                                >
                                                  <a target="_blank"
                                                    ><img
                                                      src="https://tlr.stripocdn.email/content/guids/CABINET_66498ea076b5d00c6f9553055acdb37a/images/50681527588357616.png"
                                                      alt
                                                      style="display: block"
                                                      width="24"
                                                  /></a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  class="esd-block-text"
                                                  align="center"
                                                  esd-links-color="#ffffff"
                                                >
                                                  <p
                                                    style="
                                                      color: #ffffff;
                                                      font-size: 12px;
                                                    "
                                                  >
                                                    <a
                                                      target="_blank"
                                                      style="
                                                        font-size: 16px;
                                                        color: #ffffff;
                                                      "
                                                      href="tel:123456789"
                                                      >+91 9289480033</a
                                                    >
                                                  </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if mso]></td></tr></table><![endif]-->
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
                          align="center"
                          esd-custom-block-id="88592"
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
                                  class="esd-structure es-p20t es-p10r es-p10l"
                                  align="left"
                                >
                                  <!--[if mso]><table width="580" cellpadding="0"
                                cellspacing="0"><tr><td width="190" valign="top"><![endif]-->
                                  <table
                                    class="es-left"
                                    cellspacing="0"
                                    cellpadding="0"
                                    align="left"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="es-m-p0r es-m-p20b esd-container-frame"
                                          width="190"
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
                                                  class="esd-block-text es-p5t es-m-txt-c"
                                                  esdev-links-color="#666666"
                                                  align="right"
                                                >
                                                  <h4 style="color: #666666">
                                                    Follow us:
                                                  </h4>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if mso]></td><td width="20"></td><td width="370" valign="top"><![endif]-->
                                  <table
                                    cellspacing="0"
                                    cellpadding="0"
                                    align="right"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          class="esd-container-frame"
                                          width="370"
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
                                                  class="esd-block-social es-m-txt-c"
                                                  align="left"
                                                  style="font-size: 0"
                                                >
                                                  <table
                                                    class="es-table-not-adapt es-social"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          class="es-p15r"
                                                          valign="top"
                                                          align="center"
                                                        >
                                                          <a target="_blank" href
                                                            ><img
                                                              title="Facebook"
                                                              src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/facebook-rounded-gray.png"
                                                              alt="Fb"
                                                              width="32"
                                                              height="32"
                                                          /></a>
                                                        </td>
                                                        <td
                                                          class="es-p15r"
                                                          valign="top"
                                                          align="center"
                                                        >
                                                          <a target="_blank" href
                                                            ><img
                                                              title="Twitter"
                                                              src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/twitter-rounded-gray.png"
                                                              alt="Tw"
                                                              width="32"
                                                              height="32"
                                                          /></a>
                                                        </td>
                                                        <td
                                                          class="es-p15r"
                                                          valign="top"
                                                          align="center"
                                                        >
                                                          <a target="_blank" href
                                                            ><img
                                                              title="Instagram"
                                                              src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/instagram-rounded-gray.png"
                                                              alt="Inst"
                                                              width="32"
                                                              height="32"
                                                          /></a>
                                                        </td>
                                                        <!-- <td class="es-p15r" valign="top" align="center">
                                                                                                            <a target="_blank" href><img title="Youtube" src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/youtube-rounded-gray.png" alt="Yt" width="32" height="32"></a>
                                                                                                        </td> -->
                                                        <td
                                                          class="es-p15r"
                                                          valign="top"
                                                          align="center"
                                                        >
                                                          <a target="_blank" href
                                                            ><img
                                                              title="Linkedin"
                                                              src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/linkedin-rounded-gray.png"
                                                              alt="In"
                                                              width="32"
                                                              height="32"
                                                          /></a>
                                                        </td>
                                                        <!-- <td class="es-p10r" valign="top" align="center">
                                                                                                            <a target="_blank" href><img title="Pinterest" src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/pinterest-rounded-gray.png" alt="P" width="32" height="32"></a>
                                                                                                        </td> -->
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
                                  <!--[if mso]></td></tr></table><![endif]-->
                                </td>
                              </tr>
                              <tr>
                                <td
                                  class="esd-structure es-p5t es-p10b es-p10r es-p10l"
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
                                                  class="esd-block-text es-p5t es-p10b"
                                                  align="center"
                                                >
                                                  <h5 style="color: #666666">
                                                    Contact us:
                                                    <a
                                                      target="_blank"
                                                      href="tel:+919289480033"
                                                      >+91 9289480033</a
                                                    >
                                                    |
                                                    <a
                                                      target="_blank"
                                                      href="mailto:your@mail.com"
                                                      >connect@brightdigitalgold.com</a
                                                    >
                                                  </h5>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  align="center"
                                                  class="esd-block-text"
                                                >
                                                  <p>
                                                    This daily newsletter was sent
                                                    to
                                                    <a
                                                      target="_blank"
                                                      href="mailto:info@name.com"
                                                      >info@edu.com</a
                                                    >
                                                    from company name because you
                                                    subscribed.
                                                  </p>
                                                  <p>
                                                    If you would not like to receive
                                                    this email
                                                    <a
                                                      target="_blank"
                                                      class="unsubscribe"
                                                      href
                                                      >unsubscribe here</a
                                                    >.
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

export default WelcomeEmail
