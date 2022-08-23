import React from 'react'
import './Logins.css'

function Logins() {
    return (
        <>
            
            <div className='logins-main'>
                <div className='logins-main-head'>
                    <div className='logins-icons-head'>
                        <div className='logins-setting-icon'>
                            <svg width="34" height="33" viewBox="0 0 34 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.1708 28.1944C25.4685 28.1944 26.5206 27.1424 26.5206 25.8446C26.5206 24.5468 25.4685 23.4948 24.1708 23.4948C22.873 23.4948 21.821 24.5468 21.821 25.8446C21.821 27.1424 22.873 28.1944 24.1708 28.1944Z"
                                    fill="#FFFEFE"/>
                                <path
                                    d="M33.3079 25.2328C32.582 23.3833 31.3293 21.7876 29.7051 20.6433C28.0809 19.499 26.1566 18.8566 24.1707 18.7955C22.1848 18.8566 20.2605 19.499 18.6363 20.6433C17.0121 21.7876 15.7594 23.3833 15.0335 25.2328L14.7715 25.8449L15.0335 26.457C15.7594 28.3065 17.0121 29.9022 18.6363 31.0465C20.2605 32.1908 22.1848 32.8333 24.1707 32.8943C26.1566 32.8333 28.0809 32.1908 29.7051 31.0465C31.3293 29.9022 32.582 28.3065 33.3079 26.457L33.5699 25.8449L33.3079 25.2328ZM24.1707 30.5445C23.2412 30.5445 22.3326 30.2689 21.5597 29.7525C20.7869 29.2361 20.1845 28.5021 19.8288 27.6434C19.4731 26.7846 19.38 25.8397 19.5614 24.9281C19.7427 24.0164 20.1903 23.179 20.8476 22.5218C21.5048 21.8645 22.3422 21.4169 23.2538 21.2356C24.1655 21.0543 25.1104 21.1473 25.9692 21.503C26.8279 21.8587 27.5619 22.4611 28.0783 23.2339C28.5947 24.0068 28.8703 24.9154 28.8703 25.8449C28.8688 27.0909 28.3731 28.2853 27.4921 29.1663C26.6111 30.0473 25.4166 30.543 24.1707 30.5445V30.5445ZM11.7155 22.0852C10.7545 21.3641 9.99365 20.4093 9.50534 19.3115C9.01704 18.2137 8.81744 17.0092 8.92549 15.8126C9.03354 14.6159 9.44566 13.4668 10.1227 12.4742C10.7998 11.4816 11.7193 10.6785 12.794 10.1412C13.8687 9.60392 15.0629 9.35023 16.2632 9.40424C17.4635 9.45825 18.6301 9.81815 19.6522 10.4498C20.6743 11.0814 21.518 11.9638 22.1032 13.0132C22.6884 14.0626 22.9956 15.2441 22.9958 16.4457H20.646C20.646 15.6446 20.4412 14.8568 20.0511 14.1571C19.661 13.4574 19.0985 12.8691 18.4171 12.4479C17.7357 12.0268 16.9579 11.7868 16.1576 11.7508C15.3573 11.7148 14.5611 11.8839 13.8446 12.2422C13.1281 12.6005 12.5151 13.1359 12.0637 13.7977C11.6124 14.4596 11.3377 15.2258 11.2657 16.0236C11.1938 16.8215 11.327 17.6244 11.6527 18.3563C11.9784 19.0882 12.4857 19.7247 13.1266 20.2054L11.7155 22.0852Z"
                                    fill="#FFFEFE"/>
                                <path
                                    d="M31.5784 10.6258L28.8057 5.82283C28.5344 5.3517 28.1081 4.98931 27.5994 4.79753C27.0907 4.60576 26.5312 4.59648 26.0164 4.77129L23.1567 5.73941C22.6639 5.40761 22.1489 5.11005 21.6152 4.84883L21.0231 1.88807C20.9164 1.3556 20.6285 0.876527 20.2085 0.532314C19.7885 0.188102 19.2622 2.07697e-06 18.7191 0H13.1735C12.6303 5.64393e-05 12.1039 0.188323 11.6838 0.532769C11.2638 0.877214 10.976 1.35656 10.8696 1.88925L10.2774 4.84766C9.73776 5.10639 9.2168 5.4024 8.7183 5.73354L5.87503 4.77129C5.36058 4.59709 4.80163 4.60669 4.29345 4.79843C3.78527 4.99018 3.35931 5.35221 3.08816 5.82283L0.31538 10.6258C0.0437553 11.0962 -0.0565709 11.646 0.0314649 12.182C0.119501 12.7179 0.390463 13.2068 0.798267 13.5655L3.06701 15.5593C3.04704 15.8554 3.02236 16.1491 3.02236 16.4487C3.02236 16.7518 3.03411 17.0514 3.05526 17.3487L0.799441 19.3319C0.391257 19.6903 0.119845 20.179 0.0313778 20.715C-0.0570889 21.2509 0.0428545 21.8009 0.314205 22.2715L3.08698 27.0745C3.35823 27.5457 3.78458 27.908 4.29327 28.0998C4.80196 28.2916 5.36144 28.3009 5.87621 28.1261L8.73593 27.1579C9.22859 27.4904 9.74364 27.7883 10.2774 28.0497L10.8684 31.0081C10.9749 31.541 11.2628 32.0205 11.6831 32.365C12.1034 32.7094 12.6301 32.8976 13.1735 32.8974H14.7714V30.5475H13.1735L12.3394 26.3766C11.1854 25.948 10.1142 25.3231 9.17299 24.5297L5.12309 25.8996L2.35032 21.0966L5.55193 18.2827C5.33289 17.0677 5.33011 15.8236 5.54371 14.6076L2.35032 11.7996L5.12309 6.99774L9.14949 8.36063C10.0974 7.56607 11.177 6.9434 12.3394 6.52073L13.1735 2.34981H18.7191L19.5533 6.52073C20.7072 6.94946 21.7784 7.5743 22.7197 8.36768L26.7696 6.99774L29.5423 11.8008L26.2549 14.6816L27.8035 16.4487L31.0932 13.5655C31.5014 13.2071 31.7728 12.7183 31.8613 12.1824C31.9497 11.6464 31.8498 11.0964 31.5784 10.6258V10.6258Z"
                                    fill="#FFFEFE"/>
                            </svg>
                        
                        </div>
                        <div className='logins-setting-text'>
                            <h2>Logins</h2>
                        </div>
                    </div>
                    <div className='logins-head-arrow'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.9976 1.65933C9.18283 0.55584 2.76379 5.18577 1.6603 12.0006C0.556812 18.8154 5.18674 25.2344 12.0015 26.3379C18.8163 27.4414 25.2354 22.8115 26.3389 15.9967C27.4424 9.18186 22.8124 2.76282 15.9976 1.65933Z"
                                stroke="#00AEEF" strokeWidth="2"/>
                            <path d="M9 11.125L14 16.125L19 11.125" stroke="#00AEEF" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    
                    </div>
                </div>
                <div className='logins-section-two'>
                    <h4>Logins</h4>
                    <div className='logins-text-one'>
                        <p><b>New to Files And Smiles?</b> Your center's logins are listed below. Open the Launch Plan
                            and follow the steps to get started.</p>
                    </div>
                    <div className='logins-text-two'>
                        <p><b>Additional Admin Logins:</b> Submit a request and include the director's name and email
                            address to add administrator logins to your account. Note there may be an additional monthly
                            cost to add administrators to your account.</p>
                    </div>
                    <div className='admin-logins'>
                        <h4>Administrator logins</h4>
                        <p>Max Mallidius<br/>urbanzoolander@gmail.com</p>
                    </div>
                    <hr/>
                    <div className='classroom-logins'>
                        <h4>Classroom logins</h4>
                        <p>For security reasons, passwords are never displayed in HiMama</p>
                    </div>
                    <div className='password-reset'>
                        <div className='login-lock-icon'>
                            <svg width="21" height="24" viewBox="0 0 21 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.0833 7.97222H19.3611C19.6632 7.97222 19.9528 8.09221 20.1664 8.3058C20.38 8.51938 20.5 8.80906 20.5 9.11111V22.7778C20.5 23.0798 20.38 23.3695 20.1664 23.5831C19.9528 23.7967 19.6632 23.9167 19.3611 23.9167H1.13889C0.836837 23.9167 0.547156 23.7967 0.333573 23.5831C0.11999 23.3695 0 23.0798 0 22.7778V9.11111C0 8.80906 0.11999 8.51938 0.333573 8.3058C0.547156 8.09221 0.836837 7.97222 1.13889 7.97222H3.41667V6.83334C3.41667 5.02102 4.13661 3.28294 5.4181 2.00144C6.6996 0.719939 8.43769 0 10.25 0C12.0623 0 13.8004 0.719939 15.0819 2.00144C16.3634 3.28294 17.0833 5.02102 17.0833 6.83334V7.97222ZM2.27778 10.25V21.6389H18.2222V10.25H2.27778ZM9.11111 14.8056H11.3889V17.0833H9.11111V14.8056ZM4.55556 14.8056H6.83333V17.0833H4.55556V14.8056ZM13.6667 14.8056H15.9444V17.0833H13.6667V14.8056ZM14.8056 7.97222V6.83334C14.8056 5.62513 14.3256 4.4664 13.4713 3.61207C12.6169 2.75774 11.4582 2.27778 10.25 2.27778C9.04179 2.27778 7.88307 2.75774 7.02874 3.61207C6.1744 4.4664 5.69444 5.62513 5.69444 6.83334V7.97222H14.8056Z"
                                    fill="#00AEEF"/>
                            </svg>
                        
                        
                        </div>
                        <div className='password-reset-text'>
                            <h4>Password Reset Instructions</h4>
                            <i>lassroom passwords: Click the "Reset password" button next to the classroom login.<br/>Admin
                                passwords: First, log out. Then visit the Log In page. From there, click "Forgot?", then
                                enter your email address.</i>
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    )
}

export default Logins