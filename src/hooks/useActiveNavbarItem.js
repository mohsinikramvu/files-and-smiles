// import React, {useLayoutEffect, useState} from "react"
// import {useLocation} from "react-router-dom";
//
// export const useActiveNavbarItem = () => {
//     const [active, setActive] = useState(null);
//     const location = useLocation();
//     useLayoutEffect(() => {
//         let pathArr = location.pathname.split('/');
//         console.log(pathArr);
//         let matchedPath = "/";
//         if (pathArr.length > 1 && pathArr[pathArr.length - 1] !== "") {
//             matchedPath = pathArr[pathArr.length - 1];
//         }
//         if (matchedPath) {
//             const itemIndex = Lists.findIndex((list) => list.address === matchedPath);
//             let result = Lists.find((item, i) => itemIndex === i && item)
//             console.log(result);
//             setActive(result);
//         }
//     }, [location])
//     return active;
// }
//
