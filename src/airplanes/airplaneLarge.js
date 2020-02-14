import $ from 'jquery';
import image from '../image/images/plane_large.jpg'

export const airplaneLarge = () => {
    const airplane = $(`
    <div class="column">
    <div class="col-12 d-flex justify-content-center zero">
        <div class="airplanes">
            <div class="col-12 d-flex justify-content-center airplane">
                <img src="${image}" class="airplane-large" alt="">
                <svg viewBox="0 0 306 1182" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421">
                    <rect class="airplane_small-seat status-available" id="A1" x="97.254" y="213.16" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B1" x="111.654" y="213.16" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C1" x="126.774" y="213.16" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A2" x="97.254" y="234.76" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B2" x="111.654" y="234.76" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C2" x="126.774" y="234.76" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A3" x="97.254" y="256.36" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B3" x="111.654" y="256.36" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C3" x="126.774" y="256.36" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A4" x="97.254" y="277.96" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B4" x="111.654" y="277.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C4" x="126.774" y="277.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A5" x="97.254" y="299.56" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B5" x="111.654" y="299.56" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C5" x="126.774" y="299.56" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A6" x="97.254" y="321.16" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B6" x="111.654" y="321.16" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C6" x="126.774" y="321.16" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A7" x="97.254" y="342.76" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B7" x="111.654" y="342.76" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C7" x="126.774" y="342.76" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A8" x="97.254" y="364.36" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B8" x="111.654" y="364.36" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C8" x="126.774" y="364.36" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A9" x="97.254" y="385.96" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B9" x="111.654" y="385.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C9" x="126.774" y="385.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A10" x="97.254" y="407.56" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B10" x="111.654" y="407.56" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C10" x="126.774" y="407.56" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A11" x="97.254" y="429.16" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B11" x="111.654" y="429.16" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C11" x="126.774" y="429.16" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A12" x="97.254" y="457.96" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B12" x="111.654" y="457.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C12" x="126.774" y="457.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A13" x="97.254" y="486.76" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B13" x="111.654" y="486.76" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C13" x="126.774" y="486.76" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A14" x="97.254" y="508.36" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B14" x="111.654" y="508.36" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C14" x="126.774" y="508.36" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A15" x="97.254" y="529.96" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B15" x="111.654" y="529.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C15" x="126.774" y="529.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A16" x="97.254" y="550.12" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B16" x="111.654" y="551.56" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C16" x="126.774" y="551.56" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A17" x="97.254" y="573.16" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B17" x="111.654" y="573.16" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C17" x="126.774" y="573.16" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A18" x="97.254" y="594.76" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B18" x="111.654" y="594.76" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C18" x="126.774" y="594.76" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A19" x="97.254" y="616.36" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B19" x="111.654" y="616.36" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C19" x="126.774" y="616.36" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A20" x="97.254" y="637.96" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B20" x="111.654" y="637.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C20" x="126.774" y="637.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A21" x="97.254" y="659.56" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B21" x="111.654" y="659.56" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C21" x="126.774" y="659.56" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A22" x="97.254" y="681.16" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B22" x="111.654" y="681.16" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C22" x="126.774" y="681.16" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A23" x="97.254" y="702.76" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B23" x="111.654" y="702.76" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C23" x="126.774" y="702.76" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A24" x="97.254" y="724.36" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B24" x="111.654" y="724.36" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C24" x="126.774" y="724.36" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A25" x="97.254" y="745.96" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B25" x="111.654" y="745.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C25" x="126.774" y="745.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A26" x="97.254" y="767.56" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B26" x="111.654" y="767.56" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C26" x="126.774" y="767.56" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A27" x="97.254" y="789.16" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B27" x="111.654" y="789.16" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C27" x="126.774" y="789.16" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A28" x="97.254" y="810.76" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B28" x="111.654" y="810.76" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C28" x="126.774" y="810.76" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A29" x="97.254" y="832.36" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B29" x="111.654" y="832.36" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C29" x="126.774" y="832.36" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="A30" x="97.254" y="853.96" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="B30" x="111.654" y="853.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="C30" x="126.774" y="853.96" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D1" x="163.494" y="212.44" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E1" x="177.894" y="212.44" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F1" x="193.014" y="212.44" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D2" x="163.494" y="234.04" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E2" x="177.894" y="234.04" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F2" x="193.014" y="234.04" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D3" x="163.494" y="255.64" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E3" x="177.894" y="255.64" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F3" x="193.014" y="255.64" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D4" x="163.494" y="277.24" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E4" x="177.894" y="277.24" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F4" x="193.014" y="277.24" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D5" x="163.494" y="298.84" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E5" x="177.894" y="298.84" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F5" x="193.014" y="298.84" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D6" x="163.494" y="320.44" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E6" x="177.894" y="320.44" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F6" x="193.014" y="320.44" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D7" x="163.494" y="342.04" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E7" x="177.894" y="342.04" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F7" x="193.014" y="342.04" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D8" x="163.494" y="363.64" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E8" x="177.894" y="363.64" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F8" x="193.014" y="363.64" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D9" x="163.494" y="385.24" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E9" x="177.894" y="385.24" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F9" x="193.014" y="385.24" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D10" x="163.494" y="406.84" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E10" x="177.894" y="406.84" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F10" x="193.014" y="406.84" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D11" x="163.494" y="428.44" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E11" x="177.894" y="428.44" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F11" x="193.014" y="428.44" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D12" x="163.494" y="457.24" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E12" x="177.894" y="457.24" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F12" x="193.014" y="457.24" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D13" x="163.494" y="486.04" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E13" x="177.894" y="486.04" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F13" x="193.014" y="486.04" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D14" x="163.494" y="507.64" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E14" x="177.894" y="507.64" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F14" x="193.014" y="507.64" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D15" x="163.494" y="529.24" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E15" x="177.894" y="529.24" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F15" x="193.014" y="529.24" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D16" x="163.494" y="550.84" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E16" x="177.894" y="550.84" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F16" x="193.014" y="550.84" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D17" x="163.494" y="572.44" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E17" x="177.894" y="572.44" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F17" x="193.014" y="572.44" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D18" x="163.494" y="594.04" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E18" x="177.894" y="594.04" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F18" x="193.014" y="594.04" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D19" x="163.494" y="615.64" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E19" x="177.894" y="615.64" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F19" x="193.014" y="615.64" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D20" x="163.494" y="637.24" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E20" x="177.894" y="637.24" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F20" x="193.014" y="637.24" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D21" x="163.494" y="658.84" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E21" x="177.894" y="658.84" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F21" x="193.014" y="658.84" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D22" x="163.494" y="680.44" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E22" x="177.894" y="680.44" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F22" x="193.014" y="680.44" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D23" x="163.494" y="702.04" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E23" x="177.894" y="702.04" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F23" x="193.014" y="702.04" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D24" x="163.494" y="723.64" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E24" x="177.894" y="723.64" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F24" x="193.014" y="723.64" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D25" x="163.494" y="745.24" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E25" x="177.894" y="745.24" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F25" x="193.014" y="745.24" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D26" x="163.494" y="766.84" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E26" x="177.894" y="766.84" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F26" x="193.014" y="766.84" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D27" x="163.494" y="788.44" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E27" x="177.894" y="788.44" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F27" x="193.014" y="788.44" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D28" x="163.494" y="810.04" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E28" x="177.894" y="810.04" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F28" x="193.014" y="810.04" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="D29" x="163.494" y="831.64" width="13.237" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="E29" x="177.894" y="831.64" width="13.626" height="15.055" />
                    <rect class="airplane_small-seat status-available" id="F29" x="193.014" y="831.64" width="13.626" height="15.055" />
                </svg>
            </div>
        </div>
    </div>
</div>
        `);
        fetch('http://localhost:3000/airplaneLarge') // Pobiera baze danych tylko Array zwiazany z "seats"
        .then((res) => {
            return res.json();   // to co pobralem przerabia na jsona (jest to konieczne w kazdym przypadku inaczej JS tego nie przeczyta!)
        })
        .then((elements) => {  // Pobiera wszystkie elementy "seats" - elements jest nazwa parametru
            elements.forEach(el => {   // wrzucamy parametr (elements), a nastepnie do wszystkich tych elementow iterujemy kazdy element "el" (tez jest to nazwa parametru)
                if(el.status === false){    // sprawdzamy status kazdego elementu (status jest wewnatrz jsona! status odwoluje sie do statusu w jsonie!)
                    // console.log(document.getElementById(el.id)) // sprawdzenie czy jest taki element
                  document.getElementById(el.id).classList.add("status-booked") // pobieramy element ktory zostal utworzony na stronie i przypisujemy do niego klase
                  document.getElementById(el.id).classList.remove("status-available")
                }
            });
          });
  
    return airplane ;
  };