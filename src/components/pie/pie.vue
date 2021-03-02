<template>

  <div class="pie">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script:400,700|Josefin+Sans:300,400,600,700|Nunito:300,400,600,700" rel="stylesheet">
   
   <section class="footer">
     <div class="footer-copyright">
        <p class="footer-copyrigh-paragraph icon">
            <i class="fas fa-copyright"></i><span>Refrescos S.A.</span>
        </p>
    </div>
    <div class="footer-social-media">
        <ul class="social-media">
            <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                    <i class="fab fa-facebook-square"></i>
                </a>
            </li>
            <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                    <i class="fab fa-instagram"></i>
                </a>
            </li>
            <li class="social-icon-item">
              <a href="#" class="social-icon-link">
                    <i class="fab fa-github"></i>
                </a>
                
            </li>
            <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </li>
            
        </ul>
    </div>
    
   </section>
  </div>
</template>


<script>
export default {
  name: 'pie',
  props: {
    msg: String
  }
}
</script>
<style scoped lang="scss">
@import "./styles/footer.scss";

</style>
