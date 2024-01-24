import { Component, Input } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() config!: Config;

  images: string[] = [];

  ngOnChanges() {
    this.images = this.allImages
  }

  settings = {
    thumbnail: true,
    animateThumb: true,
    allowMediaOverlap: false,
    alignThumbnails: 'middle' as const,
  };


  private allImages = [
    "../../../rewards/assets/images/collection/pexels-adriaan-greyling-752035.jpg",
    "../../../rewards/assets/images/collection/pexels-alex-andrews-2295744.jpg",
    "../../../rewards/assets/images/collection/pexels-alex-andrews-821736.jpg",
    "../../../rewards/assets/images/collection/pexels-alexandru-rotariu-733416.jpg",
    "../../../rewards/assets/images/collection/pexels-alexas-fotos-2220336.jpg",
    "../../../rewards/assets/images/collection/pexels-alexas-fotos-2220337.jpg",
    "../../../rewards/assets/images/collection/pexels-andreas-barth-1131774.jpg",
    "../../../rewards/assets/images/collection/pexels-andrew-patrick-17480620.jpg",
    "../../../rewards/assets/images/collection/pexels-anna-shvets-4587992.jpg",
    "../../../rewards/assets/images/collection/pexels-anna-shvets-4588052.jpg",
    "../../../rewards/assets/images/collection/pexels-anna-shvets-4588435.jpg",
    "../../../rewards/assets/images/collection/pexels-anna-tarazevich-6796549.jpg",
    "../../../rewards/assets/images/collection/pexels-belle-co-847393.jpg",
    "../../../rewards/assets/images/collection/pexels-charles-1851164.jpg",
    "../../../rewards/assets/images/collection/pexels-chevanon-photography-1108099.jpg",
    "../../../rewards/assets/images/collection/pexels-chevanon-photography-1335971.jpg",
    "../../../rewards/assets/images/collection/pexels-daniel-torobekov-4886378.jpg",
    "../../../rewards/assets/images/collection/pexels-debadutta-1046287.jpg",
    "../../../rewards/assets/images/collection/pexels-dominika-roseclay-2023384.jpg",
    "../../../rewards/assets/images/collection/pexels-dts-videos-532440.jpg",
    "../../../rewards/assets/images/collection/pexels-felix-mittermeier-2832076.jpg",
    "../../../rewards/assets/images/collection/pexels-frank-cone-2629372.jpg",
    "../../../rewards/assets/images/collection/pexels-frank-cone-3250638.jpg",
    "../../../rewards/assets/images/collection/pexels-frank-cone-3908080.jpg",
    "../../../rewards/assets/images/collection/pexels-frans-van-heerden-1912176.jpg",
    "../../../rewards/assets/images/collection/pexels-goochie-poochie-grooming-3361739.jpg",
    "../../../rewards/assets/images/collection/pexels-hans-martha-1059823.jpg",
    "../../../rewards/assets/images/collection/pexels-ilo-frey-2317904.jpg",
    "../../../rewards/assets/images/collection/pexels-jan-kopřiva-3281127.jpg",
    "../../../rewards/assets/images/collection/pexels-jayant-kulkarni-1149403.jpg",
    "../../../rewards/assets/images/collection/pexels-jean-van-der-meulen-1526410.jpg",
    "../../../rewards/assets/images/collection/pexels-jeremy-bishop-2422915.jpg",
    "../../../rewards/assets/images/collection/pexels-jeremy-bishop-2765872.jpg",
    "../../../rewards/assets/images/collection/pexels-jonas-von-werne-3354346.jpg",
    "../../../rewards/assets/images/collection/pexels-jos-van-ouwerkerk-1617366.jpg",
    "../../../rewards/assets/images/collection/pexels-julian-kirschner-3117157.jpg",
    "../../../rewards/assets/images/collection/pexels-just-a-couple-photos-3777622.jpg",
    "../../../rewards/assets/images/collection/pexels-kullanmıyorum-4533107.jpg",
    "../../../rewards/assets/images/collection/pexels-laura-meinhardt-7372338.jpg",
    "../../../rewards/assets/images/collection/pexels-leonid-danilov-2690766.jpg",
    "../../../rewards/assets/images/collection/pexels-lumn-406014.jpg",
    "../../../rewards/assets/images/collection/pexels-marko-blazevic-774731.jpg",
    "../../../rewards/assets/images/collection/pexels-mithul-varshan-2318990.jpg",
    "../../../rewards/assets/images/collection/pexels-myriams-fotos-17202394.jpg",
    "../../../rewards/assets/images/collection/pexels-naushil-_-skyhawk-asia-681178.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-144234.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-247502.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-33045.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-33101.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-33537.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-372166.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-45170.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-45853.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-458976.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-45911.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-459198.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-460775.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-51129.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-52500.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-62289.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-67552.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-86405.jpg",
    "../../../rewards/assets/images/collection/pexels-pixabay-86596.jpg",
    "../../../rewards/assets/images/collection/pexels-richard-verbeek-572861.jpg",
    "../../../rewards/assets/images/collection/pexels-robert-anthony-carbone-598966.jpg",
    "../../../rewards/assets/images/collection/pexels-rodolfo-quirós-1730760.jpg",
    "../../../rewards/assets/images/collection/pexels-rompalli-harish-2235921.jpg",
    "../../../rewards/assets/images/collection/pexels-roshan-kamath-1661179.jpg",
    "../../../rewards/assets/images/collection/pexels-saifuddin-ratlamwala-3850526.jpg",
    "../../../rewards/assets/images/collection/pexels-sam-lion-5732456.jpg",
    "../../../rewards/assets/images/collection/pexels-steshka-willems-1390361.jpg",
    "../../../rewards/assets/images/collection/pexels-steve-682375.jpg",
    "../../../rewards/assets/images/collection/pexels-travis-blessing-1390200.jpg",
    "../../../rewards/assets/images/collection/pexels-vicky-deshmukh-1431465.jpg",
    "../../../rewards/assets/images/collection/pexels-wang-teck-heng-117139.jpg",
    "../../../rewards/assets/images/collection/pexels-wojciech-kumpicki-2071873.jpg",
    "../../../rewards/assets/images/collection/pexels-yoss-traore-2607423.jpg",
    "../../../rewards/assets/images/collection/pexels-yuliya-strizhkina-1198802.jpg",
    "../../../rewards/assets/images/collection/pexels-zetong-li-1784578.jpg",
    "../../../rewards/assets/images/collection/pexels-zett-foto-672142.jpg",
  ]
}
