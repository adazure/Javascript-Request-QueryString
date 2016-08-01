# Javascript Request Querystring
### Javascript ile URL adres çubuğundan gelen bilgilerde; "?" soru işareti ile ayrılmış olan veriler arasından istenilen isim alanının değeri alınabilir

#### Örnek:

http://www.websitem.com/Product?productI=2555&brandName=Apple

#### Kullanımı:

#####Aşağıda belirtilen iki türlü şekilde de bilgiler alınabilir.

* Request.value('productId')
* Request.value.productId;

#####Request bilgileri sayfa yüklendiğinde varsayılan olarak ilk seferde alınmaktadır. 
#####Eğer anlık olarak bilgilerin sıfırlanıp tekrar çekilmesi istenirse aşağıdaki method çalıştırılmalıdır

>Request.reset();
