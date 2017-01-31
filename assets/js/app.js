$('#app').jsonRender(headerData,header);
$('#app').jsonRender(bodyData,body);
$('#mobile-demo').jsonRender(navData,nav);
$('#pInfo').jsonRender(pInfoData,pInfo);
$('#soc').jsonRender(socData,soc);
$('#skillSlider').jsonRender(skillData,skill);
$('#experienceSlider').jsonRender(expData,exp);
$('#educationSlider').jsonRender(eduData,edu);
$('#portfolio-msnry-sort').jsonRender(portfolioSortData,portfolioSort);
$('#protfolio-msnry').jsonRender(portfolioData,portfolio);
$('#teamSlider').jsonRender(teamData,team);
$('#facts').jsonRender(factsData,facts);
$('#testimonialSlider').jsonRender(testimonialsData,testimonials);
$('#blog-posts').jsonRender(blogArticleData,blogArticle);
$('#contactInfo').jsonRender(contactInfoData,contactInfo);
$('main').jsonRender(footerData,footer);
$('#socialIcons').jsonRender(socialIconsData,socialIcons);
  
$('.post-content,.rev-content,.regular-text,.m-content').html('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

var contactForm = ("<form action='#' id='contactForm' novalidate><div class='input-field'><input id='contact_name' type='text' name='contactName' class='validate input-box'><label for='contact_name' class='input-label'>Name</label></div><div class='input-field'><input id='email' type='email' name='contactEmail' class='validate input-box'><label for='email' class='input-label'>Email</label></div><div class='input-field'><input id='subject' type='text' name='contactSubject' class='validate input-box'><label for='subject' class='input-label'>Subject</label></div><div class='input-field textarea-input'><textarea id='textarea1' name='contactMessage' class='validate materialize-textarea' style='height: 22px'></textarea><label for='textarea1' class='input-label'>Message</label></div><div class='input-field submit-wrap clearfix'><button type='submit' class='left waves-effect btn-flat brand-text submit-btn'>send message</button><div class='right form-loader-area'><svg class='circular size-20' height='20' width='20'><circle class='path' cx='10' cy='10' r='7' fill='none' stroke-width='3' stroke-miterlimit='10'/></svg></div></div></form>");

$('#contactForm').prepend(contactForm);