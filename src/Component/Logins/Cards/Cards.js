import React from 'react'
import Card from '../Card/Card'
import './Cards.css'
// import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
// import Addfeature from '../AddFeature/AddFeature'
import {Link} from 'react-router-dom'

function Cards() {
    return (
        <>
            <div className="row m-auto w-100">
                <div className="col-md-6 mb-20">
                    <Link to='/Form1' className='login-linked'>
                        <Card
                            link='../center-configuration/form1.js'
                            CardHeading='Center Settings'
                            icon={
                                <svg
                                    className='arrow-icon-card'
                                    width='28'
                                    height='28'
                                    viewBox='0 0 28 28'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M26.5 14C26.5 7.09644 20.9036 1.5 14 1.5C7.09644 1.5 1.5 7.09644 1.5 14C1.5 20.9036 7.09644 26.5 14 26.5C20.9036 26.5 26.5 20.9036 26.5 14Z'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                    />
                                    <path
                                        d='M11.125 19L16.125 14L11.125 9'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            }
                            settingIcon={
                                <svg
                                    width='27'
                                    height='28'
                                    viewBox='0 0 27 28'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M16.2428 0C16.4523 6.67163e-06 16.6564 0.0672077 16.8256 0.191925C16.9949 0.316642 17.1207 0.49244 17.1848 0.694L18.2732 4.112C18.7303 4.338 19.1676 4.592 19.5852 4.878L23.0602 4.122C23.2651 4.07779 23.4786 4.10045 23.6699 4.18671C23.8612 4.27297 24.0205 4.41838 24.1248 4.602L26.8676 9.4C26.9724 9.58351 27.0167 9.7959 26.9943 10.0065C26.9719 10.2172 26.8839 10.4152 26.743 10.572L24.3584 13.232C24.3931 13.7421 24.3931 14.2539 24.3584 14.764L26.743 17.428C26.8839 17.5848 26.9719 17.7828 26.9943 17.9935C27.0167 18.2041 26.9724 18.4165 26.8676 18.6L24.1248 23.4C24.0202 23.5833 23.8608 23.7283 23.6695 23.8141C23.4782 23.9 23.2649 23.9224 23.0602 23.878L19.5852 23.122C19.1696 23.406 18.7303 23.662 18.2751 23.888L17.1848 27.306C17.1207 27.5076 16.9949 27.6834 16.8256 27.8081C16.6564 27.9328 16.4523 28 16.2428 28H10.7572C10.5477 28 10.3436 27.9328 10.1744 27.8081C10.0051 27.6834 9.87934 27.5076 9.81524 27.306L8.72881 23.89C8.27291 23.6647 7.83317 23.4074 7.41283 23.12L3.93981 23.878C3.73493 23.9222 3.52144 23.8996 3.33011 23.8133C3.13878 23.727 2.97948 23.5816 2.87515 23.398L0.132362 18.6C0.0276261 18.4165 -0.0167367 18.2041 0.0056701 17.9935C0.0280769 17.7828 0.116095 17.5848 0.257034 17.428L2.64164 14.764C2.6071 14.2553 2.6071 13.7447 2.64164 13.236L0.257034 10.572C0.116095 10.4152 0.0280769 10.2172 0.0056701 10.0065C-0.0167367 9.7959 0.0276261 9.58351 0.132362 9.4L2.87515 4.6C2.97976 4.41675 3.13919 4.27175 3.3305 4.18586C3.52181 4.09997 3.73514 4.07761 3.93981 4.122L7.41283 4.88C7.83236 4.594 8.27168 4.336 8.72881 4.11L9.81722 0.694C9.88111 0.493089 10.0063 0.317757 10.1747 0.1931C10.3432 0.0684428 10.5464 0.000851335 10.7552 0H16.2408H16.2428ZM15.5185 2H11.4815L10.3575 5.534L9.59954 5.908C9.22694 6.09227 8.86726 6.3021 8.523 6.536L7.82246 7.016L4.22874 6.232L2.21023 9.768L4.67399 12.524L4.61463 13.372C4.58619 13.7902 4.58619 14.2098 4.61463 14.628L4.67399 15.476L2.20627 18.232L4.22676 21.768L7.82049 20.986L8.52102 21.464C8.86528 21.6979 9.22496 21.9077 9.59756 22.092L10.3555 22.466L11.4815 26H15.5225L16.6504 22.464L17.4064 22.092C17.7786 21.9082 18.1376 21.6983 18.481 21.464L19.1795 20.986L22.7752 21.768L24.7937 18.232L22.328 15.476L22.3874 14.628C22.4159 14.2092 22.4159 13.7888 22.3874 13.37L22.328 12.522L24.7957 9.768L22.7752 6.232L19.1795 7.012L18.481 6.536C18.1377 6.30163 17.7786 6.09178 17.4064 5.908L16.6504 5.536L15.5205 2H15.5185ZM13.5 8C15.0745 8 16.5846 8.63214 17.6979 9.75736C18.8113 10.8826 19.4368 12.4087 19.4368 14C19.4368 15.5913 18.8113 17.1174 17.6979 18.2426C16.5846 19.3679 15.0745 20 13.5 20C11.9255 20 10.4154 19.3679 9.30207 18.2426C8.1887 17.1174 7.56322 15.5913 7.56322 14C7.56322 12.4087 8.1887 10.8826 9.30207 9.75736C10.4154 8.63214 11.9255 8 13.5 8ZM13.5 10C12.4503 10 11.4436 10.4214 10.7014 11.1716C9.95914 11.9217 9.54215 12.9391 9.54215 14C9.54215 15.0609 9.95914 16.0783 10.7014 16.8284C11.4436 17.5786 12.4503 18 13.5 18C14.5497 18 15.5564 17.5786 16.2986 16.8284C17.0409 16.0783 17.4579 15.0609 17.4579 14C17.4579 12.9391 17.0409 11.9217 16.2986 11.1716C15.5564 10.4214 14.5497 10 13.5 10Z'
                                        fill='white'
                                    />
                                </svg>
                            }
                            list={[
                                'Time zone',
                                'Center phone number',
                                'Report auto-send time',
                                'Parent sign in & pick up options',
                                'Teacher editable time cards',
                                'Pick length of week: Five (5) or Seven (7) days?',
                            ]}
                        />
                    </Link>
                </div>
                <div className="col-md-6 mb-20">
                    <Link to='/Form2' className='login-linked'>
                        <Card
                            link='../center-configuration/form1.js'
                            CardHeading='Classroom Settings'
                            icon={
                                <svg
                                    className='arrow-icon-card'
                                    width='28'
                                    height='28'
                                    viewBox='0 0 28 28'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M26.5 14C26.5 7.09644 20.9036 1.5 14 1.5C7.09644 1.5 1.5 7.09644 1.5 14C1.5 20.9036 7.09644 26.5 14 26.5C20.9036 26.5 26.5 20.9036 26.5 14Z'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                    />
                                    <path
                                        d='M11.125 19L16.125 14L11.125 9'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            }
                            settingIcon={
                                <svg
                                    width='30'
                                    height='34'
                                    viewBox='0 0 30 34'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M30 26.4V24H27.4788C27.324 23.2488 27.0258 22.5346 26.6004 21.8964L28.3884 20.1084L26.6916 18.4116L24.9036 20.1996C24.2654 19.7742 23.5512 19.476 22.8 19.3212V16.8H20.4V19.3212C19.6488 19.476 18.9346 19.7742 18.2964 20.1996L16.5084 18.4116L14.8116 20.1084L16.5996 21.8964C16.1742 22.5346 15.876 23.2488 15.7212 24H13.2V26.4H15.7212C15.876 27.1512 16.1742 27.8654 16.5996 28.5036L14.8116 30.2916L16.5084 31.9884L18.2964 30.2004C18.9346 30.6258 19.6488 30.924 20.4 31.0788V33.6H22.8V31.0788C23.5512 30.924 24.2654 30.6258 24.9036 30.2004L26.6916 31.9884L28.3884 30.2916L26.6004 28.5036C27.0258 27.8654 27.324 27.1512 27.4788 26.4H30ZM21.6 28.8C20.888 28.8 20.192 28.5889 19.5999 28.1933C19.0079 27.7977 18.5465 27.2355 18.274 26.5777C18.0016 25.9198 17.9303 25.196 18.0692 24.4977C18.2081 23.7993 18.5509 23.1579 19.0544 22.6544C19.5579 22.1509 20.1993 21.8081 20.8977 21.6692C21.596 21.5303 22.3198 21.6016 22.9777 21.874C23.6355 22.1465 24.1977 22.6079 24.5933 23.1999C24.9889 23.792 25.2 24.488 25.2 25.2C25.199 26.1545 24.8195 27.0696 24.1445 27.7445C23.4696 28.4195 22.5545 28.799 21.6 28.8Z'
                                        fill='#FFFEFE'
                                    />
                                    <path
                                        d='M24 3.6H20.4V2.4C20.3981 1.76406 20.1446 1.15472 19.695 0.705042C19.2453 0.255366 18.6359 0.00189927 18 0H8.4C7.76406 0.00189927 7.15472 0.255366 6.70504 0.705042C6.25537 1.15472 6.0019 1.76406 6 2.4V3.6H2.4C1.76406 3.6019 1.15472 3.85537 0.705042 4.30504C0.255366 4.75472 0.00189927 5.36406 0 6V31.2C0.00189927 31.8359 0.255366 32.4453 0.705042 32.895C1.15472 33.3446 1.76406 33.5981 2.4 33.6H10.8V31.2H2.4V6H6V9.6H20.4V6H24V13.2H26.4V6C26.3981 5.36406 26.1446 4.75472 25.695 4.30504C25.2453 3.85537 24.6359 3.6019 24 3.6ZM18 7.2H8.4V2.4H18V7.2Z'
                                        fill='#FFFEFE'
                                    />
                                </svg>
                            }
                            list={[
                                'Classroom names and usernames',
                                'Age groups',
                                'Display settings',
                            ]}
                        />
                    </Link>
                </div>
                <div className="col-md-6 mb-20">
                    <Link to='/HealthScreen' className='login-linked'>
                        {' '}
                        <Card
                            link='./HealthScreen/HealthScreen.js'
                            CardHeading='Health Screening'
                            icon={
                                <svg
                                    className='arrow-icon-card'
                                    width='28'
                                    height='28'
                                    viewBox='0 0 28 28'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M26.5 14C26.5 7.09644 20.9036 1.5 14 1.5C7.09644 1.5 1.5 7.09644 1.5 14C1.5 20.9036 7.09644 26.5 14 26.5C20.9036 26.5 26.5 20.9036 26.5 14Z'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                    />
                                    <path
                                        d='M11.125 19L16.125 14L11.125 9'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            }
                            settingIcon={
                                <svg
                                    width='33'
                                    height='33'
                                    viewBox='0 0 33 33'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M33 9.42857V7.07143H30.5238C30.3718 6.33367 30.0789 5.63217 29.6611 5.00539L31.4172 3.24932L29.7507 1.58282L27.9946 3.33889C27.3678 2.9211 26.6663 2.62818 25.9286 2.47618V0H23.5714V2.47618C22.8337 2.62818 22.1322 2.9211 21.5054 3.33889L19.7493 1.58282L18.0828 3.24932L19.8389 5.00539C19.4211 5.63217 19.1282 6.33367 18.9762 7.07143H16.5V9.42857H18.9762C19.1282 10.1663 19.4211 10.8678 19.8389 11.4946L18.0828 13.2507L19.7493 14.9172L21.5054 13.1611C22.1322 13.5789 22.8337 13.8718 23.5714 14.0238V16.5H25.9286V14.0238C26.6663 13.8718 27.3678 13.5789 27.9946 13.1611L29.7507 14.9172L31.4172 13.2507L29.6611 11.4946C30.0789 10.8678 30.3718 10.1663 30.5238 9.42857H33ZM24.75 11.7857C24.0507 11.7857 23.3671 11.5783 22.7857 11.1898C22.2042 10.8013 21.751 10.2491 21.4834 9.60306C21.2158 8.95699 21.1458 8.24608 21.2822 7.56022C21.4186 6.87436 21.7554 6.24435 22.2499 5.74987C22.7444 5.25539 23.3744 4.91865 24.0602 4.78222C24.7461 4.6458 25.457 4.71582 26.1031 4.98343C26.7491 5.25104 27.3013 5.70422 27.6898 6.28566C28.0784 6.86711 28.2857 7.5507 28.2857 8.25C28.2848 9.18744 27.912 10.0862 27.2491 10.7491C26.5862 11.412 25.6874 11.7848 24.75 11.7857ZM16.5 33H14.1429V27.1071C14.1419 26.1697 13.7691 25.2709 13.1062 24.608C12.4434 23.9452 11.5446 23.5724 10.6071 23.5714H5.89286C4.95541 23.5724 4.05664 23.9452 3.39376 24.608C2.73089 25.2709 2.35808 26.1697 2.35714 27.1071V33H0V27.1071C0.0018714 25.5448 0.623325 24.0471 1.72804 22.9423C2.83276 21.8376 4.33055 21.2162 5.89286 21.2143H10.6071C12.1695 21.2162 13.6672 21.8376 14.772 22.9423C15.8767 24.0471 16.4981 25.5448 16.5 27.1071V33ZM8.25 9.42857C8.9493 9.42857 9.63289 9.63594 10.2143 10.0244C10.7958 10.413 11.249 10.9652 11.5166 11.6112C11.7842 12.2573 11.8542 12.9682 11.7178 13.6541C11.5814 14.3399 11.2446 14.9699 10.7501 15.4644C10.2556 15.9589 9.62565 16.2956 8.93978 16.4321C8.25392 16.5685 7.54301 16.4985 6.89694 16.2309C6.25087 15.9633 5.69867 15.5101 5.31016 14.9286C4.92165 14.3472 4.71429 13.6636 4.71429 12.9643C4.71429 12.0266 5.0868 11.1272 5.74987 10.4642C6.41295 9.80108 7.31227 9.42857 8.25 9.42857ZM8.25 7.07143C7.0845 7.07143 5.94518 7.41704 4.9761 8.06456C4.00703 8.71207 3.25173 9.63241 2.80571 10.7092C2.35969 11.786 2.243 12.9708 2.47037 14.1139C2.69775 15.257 3.25899 16.307 4.08312 17.1312C4.90725 17.9553 5.95726 18.5165 7.10036 18.7439C8.24346 18.9713 9.42832 18.8546 10.5051 18.4086C11.5819 17.9626 12.5022 17.2073 13.1497 16.2382C13.7972 15.2691 14.1429 14.1298 14.1429 12.9643C14.1429 12.1904 13.9904 11.4241 13.6943 10.7092C13.3981 9.99423 12.9641 9.34461 12.4169 8.79741C11.8697 8.2502 11.2201 7.81614 10.5051 7.52C9.79014 7.22385 9.02386 7.07143 8.25 7.07143Z'
                                        fill='white'
                                    />
                                </svg>
                            }
                            list={[
                                'Enable screening',
                                'Edit questions',
                            ]}
                        />
                    </Link>
                </div>
                <div className="col-md-6 mb-20">
                    <Link to='/Logins' className='login-linked'>
                        <Card
                            link='./Logins/Logins.js'
                            CardHeading='Logins'
                            icon={
                                <svg
                                    className='arrow-icon-card'
                                    width='28'
                                    height='28'
                                    viewBox='0 0 28 28'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M26.5 14C26.5 7.09644 20.9036 1.5 14 1.5C7.09644 1.5 1.5 7.09644 1.5 14C1.5 20.9036 7.09644 26.5 14 26.5C20.9036 26.5 26.5 20.9036 26.5 14Z'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                    />
                                    <path
                                        d='M11.125 19L16.125 14L11.125 9'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            }
                            settingIcon={
                                <svg
                                    width='34'
                                    height='33'
                                    viewBox='0 0 34 33'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M33.3079 25.2322C32.582 23.3827 31.3293 21.787 29.7051 20.6427C28.0808 19.4984 26.1566 18.8559 24.1707 18.7948C22.1848 18.8559 20.2605 19.4984 18.6363 20.6427C17.0121 21.787 15.7594 23.3827 15.0334 25.2322L14.7714 25.8443L15.0334 26.4564C15.7594 28.3058 17.0121 29.9016 18.6363 31.0459C20.2605 32.1901 22.1848 32.8326 24.1707 32.8937C26.1566 32.8326 28.0808 32.1901 29.7051 31.0459C31.3293 29.9016 32.582 28.3058 33.3079 26.4564L33.5699 25.8443L33.3079 25.2322ZM24.1707 30.5439C23.2412 30.5439 22.3326 30.2683 21.5597 29.7519C20.7869 29.2355 20.1845 28.5015 19.8288 27.6427C19.4731 26.784 19.38 25.8391 19.5614 24.9274C19.7427 24.0158 20.1903 23.1784 20.8475 22.5211C21.5048 21.8639 22.3422 21.4163 23.2538 21.235C24.1655 21.0536 25.1104 21.1467 25.9691 21.5024C26.8279 21.8581 27.5619 22.4605 28.0783 23.2333C28.5947 24.0062 28.8703 24.9148 28.8703 25.8443C28.8688 27.0902 28.3731 28.2847 27.4921 29.1657C26.6111 30.0467 25.4166 30.5423 24.1707 30.5439V30.5439ZM11.7155 22.0846C10.7544 21.3635 9.99364 20.4087 9.50533 19.3109C9.01703 18.213 8.81742 17.0086 8.92548 15.812C9.03353 14.6153 9.44565 13.4661 10.1227 12.4735C10.7998 11.4809 11.7193 10.6779 12.794 10.1406C13.8687 9.60329 15.0629 9.3496 16.2632 9.40361C17.4635 9.45762 18.6301 9.81752 19.6522 10.4492C20.6743 11.0808 21.518 11.9632 22.1032 13.0126C22.6884 14.062 22.9956 15.2435 22.9958 16.445H20.646C20.646 15.644 20.4412 14.8562 20.0511 14.1565C19.661 13.4568 19.0985 12.8685 18.4171 12.4473C17.7356 12.0261 16.9579 11.7862 16.1576 11.7502C15.3573 11.7142 14.5611 11.8833 13.8446 12.2416C13.1281 12.5998 12.5151 13.1353 12.0637 13.7971C11.6123 14.4589 11.3377 15.2251 11.2657 16.023C11.1938 16.8208 11.327 17.6238 11.6527 18.3557C11.9783 19.0876 12.4857 19.7241 13.1266 20.2047L11.7155 22.0846Z'
                                        fill='#FFFEFE'
                                    />
                                    <path
                                        d='M31.5784 10.6258L28.8057 5.82283C28.5344 5.3517 28.1081 4.98931 27.5994 4.79753C27.0907 4.60576 26.5312 4.59648 26.0164 4.77129L23.1567 5.73941C22.6639 5.40761 22.1489 5.11005 21.6152 4.84883L21.0231 1.88807C20.9164 1.3556 20.6285 0.876527 20.2085 0.532314C19.7885 0.188102 19.2622 2.07697e-06 18.7191 0H13.1735C12.6303 5.64393e-05 12.1039 0.188323 11.6838 0.532769C11.2638 0.877214 10.976 1.35656 10.8696 1.88925L10.2774 4.84766C9.73776 5.10639 9.2168 5.4024 8.7183 5.73354L5.87503 4.77129C5.36058 4.59709 4.80163 4.60669 4.29345 4.79843C3.78527 4.99018 3.35931 5.35221 3.08816 5.82283L0.31538 10.6258C0.0437553 11.0962 -0.0565709 11.646 0.0314649 12.182C0.119501 12.7179 0.390463 13.2068 0.798267 13.5655L3.06701 15.5593C3.04704 15.8554 3.02236 16.1491 3.02236 16.4487C3.02236 16.7518 3.03411 17.0514 3.05526 17.3487L0.799441 19.3319C0.391257 19.6903 0.119845 20.179 0.0313778 20.715C-0.0570889 21.2509 0.0428545 21.8009 0.314205 22.2715L3.08698 27.0745C3.35823 27.5457 3.78458 27.908 4.29327 28.0998C4.80196 28.2916 5.36144 28.3009 5.87621 28.1261L8.73593 27.1579C9.22859 27.4904 9.74364 27.7883 10.2774 28.0497L10.8684 31.0081C10.9749 31.541 11.2628 32.0205 11.6831 32.365C12.1034 32.7094 12.6301 32.8976 13.1735 32.8974H14.7714V30.5475H13.1735L12.3394 26.3766C11.1854 25.948 10.1142 25.3231 9.17299 24.5297L5.12309 25.8996L2.35032 21.0966L5.55193 18.2827C5.33289 17.0677 5.33011 15.8236 5.54371 14.6076L2.35032 11.7996L5.12309 6.99774L9.14949 8.36063C10.0974 7.56607 11.177 6.9434 12.3394 6.52073L13.1735 2.34981H18.7191L19.5533 6.52073C20.7072 6.94946 21.7784 7.5743 22.7197 8.36768L26.7696 6.99774L29.5423 11.8008L26.2549 14.6816L27.8035 16.4487L31.0932 13.5655C31.5014 13.2071 31.7728 12.7183 31.8613 12.1824C31.9497 11.6464 31.8498 11.0964 31.5784 10.6258V10.6258Z'
                                        fill='#FFFEFE'
                                    />
                                </svg>
                            }
                            list={[
                                'Reset Passwords',
                                'View Administrators',
                            ]}
                        />
                    </Link>
                </div>
                <div className="col-md-6 mb-20">
                    <Link to='/MobilePush' className='login-linked'>
                        <Card
                            link='MobilePush.js'
                            CardHeading='Mobile Push Notifications'
                            icon={
                                <svg
                                    className='arrow-icon-card'
                                    width='28'
                                    height='28'
                                    viewBox='0 0 28 28'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M26.5 14C26.5 7.09644 20.9036 1.5 14 1.5C7.09644 1.5 1.5 7.09644 1.5 14C1.5 20.9036 7.09644 26.5 14 26.5C20.9036 26.5 26.5 20.9036 26.5 14Z'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                    />
                                    <path
                                        d='M11.125 19L16.125 14L11.125 9'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            }
                            settingIcon={
                                <svg
                                    width='30'
                                    height='33'
                                    viewBox='0 0 30 33'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M25.5555 17.3177V14.4444H23.3332V17.7777C23.3333 18.0724 23.4504 18.3549 23.6588 18.5633L26.6666 21.571V23.3332H2.22221V21.571L5.22998 18.5633C5.43837 18.3549 5.55547 18.0724 5.55553 17.7777V13.3333C5.55244 11.7719 5.96142 10.2374 6.74118 8.88476C7.52094 7.53208 8.64386 6.40912 9.99651 5.62932C11.3492 4.84951 12.8837 4.44047 14.445 4.44351C16.0063 4.44656 17.5392 4.86157 18.8888 5.64664V3.16332C17.8311 2.69501 16.7062 2.39653 15.5555 2.27888V0H13.3333V2.27777C10.5939 2.55658 8.05526 3.84122 6.20816 5.88329C4.36107 7.92535 3.33677 10.5798 3.33332 13.3333V17.3177L0.325554 20.3255C0.117167 20.5338 6.29302e-05 20.8164 0 21.111V24.4443C0 24.739 0.117063 25.0216 0.325436 25.23C0.533808 25.4384 0.816423 25.5554 1.11111 25.5554H8.88885V26.6666C8.88885 28.14 9.47417 29.553 10.516 30.5949C11.5579 31.6368 12.971 32.2221 14.4444 32.2221C15.9178 32.2221 17.3309 31.6368 18.3727 30.5949C19.4146 29.553 19.9999 28.14 19.9999 26.6666V25.5554H27.7777C28.0723 25.5554 28.355 25.4384 28.5633 25.23C28.7717 25.0216 28.8888 24.739 28.8888 24.4443V21.111C28.8887 20.8164 28.7716 20.5338 28.5632 20.3255L25.5555 17.3177ZM17.7777 26.6666C17.7777 27.5506 17.4265 28.3985 16.8014 29.0236C16.1763 29.6487 15.3284 29.9999 14.4444 29.9999C13.5603 29.9999 12.7125 29.6487 12.0874 29.0236C11.4623 28.3985 11.1111 27.5506 11.1111 26.6666V25.5554H17.7777V26.6666Z'
                                        fill='white'
                                    />
                                    <path
                                        d='M25.5556 12.223C28.0102 12.223 30.0001 10.2332 30.0001 7.7786C30.0001 5.32401 28.0102 3.33417 25.5556 3.33417C23.101 3.33417 21.1112 5.32401 21.1112 7.7786C21.1112 10.2332 23.101 12.223 25.5556 12.223Z'
                                        fill='white'
                                    />
                                </svg>
                            }
                            list={[
                                'Configure director and teacher device notifications'
                            ]}
                        />
                    </Link>
                </div>
                <div className="col-md-6 mb-20">
                    <Link to='/Virual' className='login-linked'>
                        <Card
                            link='Virual/Viral.js'
                            CardHeading='Virtual Areas'
                            icon={
                                <svg
                                    className='arrow-icon-card'
                                    width='28'
                                    height='28'
                                    viewBox='0 0 28 28'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M26.5 14C26.5 7.09644 20.9036 1.5 14 1.5C7.09644 1.5 1.5 7.09644 1.5 14C1.5 20.9036 7.09644 26.5 14 26.5C20.9036 26.5 26.5 20.9036 26.5 14Z'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                    />
                                    <path
                                        d='M11.125 19L16.125 14L11.125 9'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            }
                            settingIcon={
                                <svg
                                    width='35'
                                    height='44'
                                    viewBox='0 0 35 44'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M16.0782 42.934C16.445 43.1959 16.8843 43.3367 17.335 43.3367C17.7856 43.3367 18.225 43.1959 18.5918 42.934C19.2505 42.4681 34.7326 31.2893 34.6698 17.3348C34.6698 7.77683 26.893 0 17.335 0C7.77702 0 0.000190765 7.77683 0.000190765 17.324C-0.0626479 31.2893 15.4195 42.4681 16.0782 42.934ZM17.335 4.3337C24.5051 4.3337 30.3361 10.1647 30.3361 17.3456C30.3816 26.9621 20.828 35.597 17.335 38.4291C13.8442 35.5949 4.28839 26.9578 4.33389 17.3348C4.33389 10.1647 10.1649 4.3337 17.335 4.3337Z'
                                        fill='white'
                                    />
                                    <path
                                        d='M17.335 30.0008C22.1151 30.0008 26.0024 26.1135 26.0024 21.3334C26.0024 16.5533 22.1151 12.666 17.335 12.666C12.5549 12.666 8.6676 16.5533 8.6676 21.3334C8.6676 26.1135 12.5549 30.0008 17.335 30.0008ZM17.335 16.9997C19.725 16.9997 21.6687 18.9434 21.6687 21.3334C21.6687 23.7235 19.725 25.6671 17.335 25.6671C14.945 25.6671 13.0013 23.7235 13.0013 21.3334C13.0013 18.9434 14.945 16.9997 17.335 16.9997Z'
                                        fill='white'
                                    />
                                </svg>
                            }
                            list={[
                                'Configure Transition Aras'
                            ]}
                        />
                    </Link>
                </div>
                <div className="col-md-6 mb-20">
                    <Link to='/AddOn' className='login-linked'>
                        <Card
                            link='/AddOn/AddOn.js'
                            CardHeading='Add-on Features'
                            icon={
                                <svg
                                    className='arrow-icon-card'
                                    width='28'
                                    height='28'
                                    viewBox='0 0 28 28'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M26.5 14C26.5 7.09644 20.9036 1.5 14 1.5C7.09644 1.5 1.5 7.09644 1.5 14C1.5 20.9036 7.09644 26.5 14 26.5C20.9036 26.5 26.5 20.9036 26.5 14Z'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                    />
                                    <path
                                        d='M11.125 19L16.125 14L11.125 9'
                                        stroke='#00AEEF'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            }
                            settingIcon={
                                <svg
                                    width='25'
                                    height='19'
                                    viewBox='0 0 25 19'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M22.8667 0H1.63333C1.2003 0.000486347 0.785133 0.172726 0.478929 0.47893C0.172725 0.785134 0.000486347 1.2003 0 1.63333V17.15C0.000486347 17.583 0.172725 17.9982 0.478929 18.3044C0.785133 18.6106 1.2003 18.7828 1.63333 18.7833H22.8667C23.2997 18.7828 23.7149 18.6106 24.0211 18.3044C24.3273 17.9982 24.4995 17.583 24.5 17.15V1.63333C24.4995 1.2003 24.3273 0.785134 24.0211 0.47893C23.7149 0.172726 23.2997 0.000486347 22.8667 0V0ZM22.8667 17.15H1.63333V1.63333H22.8667L22.8677 17.15H22.8667Z'
                                        fill='#FDFBFB'
                                    />
                                    <path
                                        d='M11.025 5.71779H20.4167V7.35113H11.025V5.71779ZM8.16667 9.39279H20.4167V11.0261H8.16667V9.39279ZM8.16667 13.0678H20.4167V14.7011H8.16667V13.0678ZM3.72212 3.67613V10.2566L8.78402 6.71326L3.72212 3.67613Z'
                                        fill='#FDFBFB'
                                    />
                                    <path
                                        d='M22.8667 0H1.63333C1.2003 0.000486347 0.785133 0.172726 0.478929 0.47893C0.172725 0.785134 0.000486347 1.2003 0 1.63333V17.15C0.000486347 17.583 0.172725 17.9982 0.478929 18.3044C0.785133 18.6106 1.2003 18.7828 1.63333 18.7833H22.8667C23.2997 18.7828 23.7149 18.6106 24.0211 18.3044C24.3273 17.9982 24.4995 17.583 24.5 17.15V1.63333C24.4995 1.2003 24.3273 0.785134 24.0211 0.47893C23.7149 0.172726 23.2997 0.000486347 22.8667 0V0ZM22.8667 17.15H1.63333V1.63333H22.8667L22.8677 17.15H22.8667Z'
                                        fill='#FDFBFB'
                                    />
                                    <path
                                        d='M11.025 5.71779H20.4167V7.35113H11.025V5.71779ZM8.16667 9.39279H20.4167V11.0261H8.16667V9.39279ZM8.16667 13.0678H20.4167V14.7011H8.16667V13.0678ZM3.72212 3.67613V10.2566L8.78402 6.71326L3.72212 3.67613Z'
                                        fill='#FDFBFB'
                                    />
                                    <path
                                        d='M11.025 5.71745H20.4167V7.35078H11.025V5.71745ZM8.16668 9.39245H20.4167V11.0258H8.16668V9.39245ZM8.16668 13.0674H20.4167V14.7008H8.16668V13.0674ZM3.72212 3.67578V10.2562L8.78403 6.71291L3.72212 3.67578Z'
                                        fill='#FDFBFB'
                                    />
                                </svg>
                            }
                            list={[
                                'Staff Management & Ratios',
                                'Smart Billing',
                            ]}
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Cards
