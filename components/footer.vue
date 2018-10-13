<template>
<footer>
    <div class="wrap-footer">
        <a href="/" title="Iholding">
            <img src="/images/logoft.png" title="Iholding" alt="Iholding" style="height: 40px;" />
        </a>
        <div class="b-mail-subcribe">
            <input type="email" name="email" id="textEmail" class="col-sm-12 col-md-12 col-lg-12 ipText"
                   placeholder="Your mail" required/>
            <input type="button" value="Subscribe" id="clickRegisterEmail" class="ipSubcribe"/>
        </div>
        <div class="email-contact">
            Contact us:
            <span>{{setting.email}}</span>
        </div>
        <div class="wrap-category">
            <label>Follow us</label>
        </div>
        <div class="wrap-lienket">
            <ul>
                <ul>
                    <li>
                        <a :href="setting.tiwter"
                           target="_blank">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a :href="setting.youtube"
                           target="_blank">
                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a :href="setting.facebook"
                           target="_blank">
                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        </a>
                    </li>

                    <li>
                        <a :href="setting.instagram"
                           target="_blank">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a :href="setting.reddit"
                           target="_blank">
                            <i class="fa fa-reddit-alien" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a :href="setting.google"
                           target="_blank">
                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a :href="setting.telegram"
                           target="_blank">
                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </ul>
        </div>
    </div>
</footer>
</template>

<script>
export default {
    props: ['categories', 'setting']
}
</script>