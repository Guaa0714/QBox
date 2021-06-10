DS.upfile = function(){
    $('.img_show').each(function(){
        var $this = $(this),
            btn = $this.find('.upfile'),
            img = $this.find('img');
        btn.on('change',function(){
            var file = $(this)[0].files[0],
                imgSrc = $(this)[0].value,
                url = URL.createObjectURL(file);
            if (!/.(jpg|jpeg|png|JPG|PNG|JPEG)$/.test(imgSrc)){
                alert("請上傳jpg或png格式的圖片!");
                return false;
            }else{
                img.attr('src',url);
                img.css({'opacity':'1'});
            }
        });
    });
}();