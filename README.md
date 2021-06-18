# Projeyi Çalıştırmak için

Paketleri yüklemek için;

    npm i

Lokal ortamda çalıştırmak için;

    npm run serve-local

Development ortamında çalıştırmak ve build için;

    npm run serve-dev
    npm run build-dev

Test ortamında çalıştırmak ve build için;

    npm run serve-test
    npm run build-test

Production ortamında çalıştırmak ve build için;

    npm run serve-prod
    npm run build-prod

Docker ile image oluşturmak için;

    npm run docker-build

Docker ile projeyi çalıştırmak için;

    npm run docker-serve

komutlarını kullanabilirsiniz.

# Projeyi İçerisindeki Teknolojiler

Front End Framework => Framework olarak Angular'ın 11 versiyonu tercih edildi. Angular'ın temelleriyle örneklendirmeler gerçekleştirildi.

CSS => CSS tarafında SCSS tercih edildi.İsimlendirmeler BEM metadolojisine göre kullanılmaya çalışıldı. CSS framework olarak Bootstrap kullanıldı.

Data => Data için mock-data oluşturuldu.

State Management => State Management için NgRx kütüphanesi tercih edildi. NgRx'in getirdiği entity, store, reducer ve actions yapıları kullanıldı.

Kullanılan Kütüphaneler :

angular-material 
ngrx-entity
ngrx-store


