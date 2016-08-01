var Request = (function (e) {
    
    var _queries = null;

    e.value = function (name) {
        if (!_queries) return _queries;
        for (var i = 0; i < _queries.length; i++) {
            var ele = _queries[i];
            if (ele.name == name) return ele.value;
        }
    }

    function _get() {

        //Name ve value bilgilerini queries nesnesine {name:***,value:***} şeklinde liste atama yapılacak.
        _queries = [];
        //Soru işaretinden itibaren olan kısmı alıyoruz
        var que = location.href.indexOf('?');
        //İlgili noktadan url bilgisini kesiyoruz
        var pos = que != -1 ? location.href.substring(que + 1) : null;

        //Eğer URL adresinden ? işareti bilgisi bulunuyorsa devam et
        if (pos != null) {
            var spt = pos.split('&');
            for (var i = 0; i < spt.length; i++) {
                var ele = spt[i].split('=');
                //Queries nesnesine aktarımı yapıyoruz
                _queries.push({ name: ele[0], value: ele[1] });
                //Ayrıca ilgili value methodundan nokta(.) ile de ilgili değeri almak için ek özellik ekliyoruz
                //Bu şekilde geliştirici Request.value.productId örneği gibi direk olarak ilgili değeri çekebilecek
                //Yada Request.value('productId') ile de veri alınabilecek
                e.value[ele[0]] = ele[1];
            }
        }
    }

    //Geliştirici tarafından dilediği zaman ilgili methodu tekrar çağırarak, query alanında oluşabilecek anlık değişiklikte
    //Önceki değerleri sıfırlayabilir
    e.reset = _get;

    //Sayfa yüklendiğinde ilgili methodu başlangıçta çağır
    _get();

    return e;

})({});