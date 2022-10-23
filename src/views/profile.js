import {
    html
} from "../lib.js";

import {
    getUserData,
    setUserData
} from "../until.js";
import {
    getLogout,
    getUserInfo
} from "../api/auth.js";
//import { signOut } from '../../node_modules/firebase/auth/'

import {
    closeBtn
} from "../app.js";





const profileTemplate = () => html `
    <section id="profile">
        <div class = "closeBtn"></div>
        <div class="arrows left"></div>
        <div class= "arrows right"></div>
        <section class="pictureAndCountry">    
            <div id='profile-picture'></div>
            <div id="country"><div class="flag"></div><h3>FRANCE</h3></div>
        </section>
    <hr>
        <div class="firstSection">
            <h3>Name</h3>
            <input id= "firstName"class="firstNameProfile" value="Name">
            <button class="button btnProfile" id="edit-name">Edit</button>
        </div>
    <hr>
        <div class="firstSection">
            <h3>Email address</h3>
            <input id= "email" class="emailProfile" value="email">
            <button class="button btnProfile" id="edit-email">Edit</button>
        </div>
    <hr>
        <div class="firstSection">
            <h3>What will you be using SG for?</h3>
            <!-- Surround the select box within a "custom-select" DIV element.
            Remember to set the width: -->
            <div class="custom-select" style="width:200px;">
              <select>
                <option value="0">Select your track:</option>
                <option value="1">Student Track</option>
                <option value="2">Worker Track</option>
                <option value="3">Non Eu Track</option>
              </select>
            </div>
            </div>
        </div>
    <hr>
        <h3>Connect social accounts</h3>
        <section id="social">
        <i></i>
        <i></i>
        <i></i>
    </section>
        <button id="logout">Logout</button>

    </section>
`
export const setupUI = (user) => {
    if (user) {

        db.collection('users').doc(user.uid).get().then(doc => {
            let userData = {
                'firstName': doc.data().firstName,
                'lastName': doc.data().lastName,
                email: doc.data().email,
            };
            setUserData(userData)



        })
    } else {}
}
export function updateInfo(userData) {
    if (document.getElementById('firstName')) {
        let firstName = document.getElementById('firstName');
        firstName.value = userData.firstName + ' ' + userData.lastName
        let email = document.getElementById('email');
        email.value = userData.email;
    }
}


export function profileView(ctx) {

    ctx.render(profileTemplate());
    let userData = getUserData();

    updateInfo(userData)

    let btn = document.getElementById('edit-name');
    let btnEmail = document.getElementById('edit-email')
    let names = document.getElementById('firstName')
    let email = document.getElementById('email')
    btn.addEventListener('click', () => {
        names.focus();

    })
    btnEmail.addEventListener('click', () => {
        email.focus();

    })
    closeBtn(ctx, 'profile', '/mainView')


    let logoutBtn = document.getElementById('logout');
    logoutBtn.addEventListener('click', getLogout)

    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);


}