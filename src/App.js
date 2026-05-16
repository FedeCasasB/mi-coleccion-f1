import React, { useState } from "react";

const F1_CARS = [
  { year: 1950, car: "Alfa Romeo 158", driver: "Nino Farina", team: "Alfa Romeo", engine: "Alfa Romeo 1.5 S8 Turbo", country: "🇮🇹", image:"https://www.diariomotor.com/imagenes/2015/05/AlfaRomeo158.jpg?class=L" },
  { year: 1951, car: "Alfa Romeo 159", driver: "Juan Manuel Fangio", team: "Alfa Romeo", engine: "Alfa Romeo 1.5 S8 Turbo", country: "🇦🇷", image:"https://upload.wikimedia.org/wikipedia/commons/1/1c/Alfa-Romeo-159-%281951%29.jpg"},
  { year: 1952, car: "Ferrari 500 F2", driver: "Alberto Ascari", team: "Ferrari", engine: "Ferrari 2.0 F4", country: "🇮🇹", image:"https://www.museoauto.com/wp-content/uploads/2024/06/Ferrari-500-F2-1952_01b.jpg" },
  { year: 1953, car: "Ferrari 500 F2", driver: "Alberto Ascari", team: "Ferrari", engine: "Ferrari 2.0 F4", country: "🇮🇹", image:"https://triplecrownmodelstore.com/cdn/shop/products/152250_2048x2048.jpg?v=1643742402" },
  { year: 1954, car: "Mercedes W196", driver: "Juan Manuel Fangio", team: "Mercedes-Benz", engine: "Mercedes M196 2.5 S8", country: "🇦🇷", image:"https://collectorstudio.com/wp-content/uploads/2018/04/w196StreamlinerFangio-1.jpg" },
  { year: 1955, car: "Mercedes W196", driver: "Juan Manuel Fangio", team: "Mercedes-Benz", engine: "Mercedes M196 2.5 S8", country: "🇦🇷", image:"https://upload.wikimedia.org/wikipedia/commons/3/3e/KlingK-MB-W196-1976.jpg" },
  { year: 1956, car: "Ferrari D50", driver: "Juan Manuel Fangio", team: "Ferrari / Lancia", engine: "Lancia V8 2.5", country: "🇦🇷", image:"https://cdn-images.motor.es/image/m/1320w//fotos-noticias/2016/05/min652x435/fangio-hace-4-con-ferrari-en-un-gran-ano-para-espana-201627898_1.jpg" },
  { year: 1957, car: "Maserati 250F", driver: "Juan Manuel Fangio", team: "Maserati", engine: "Maserati L6 2.5", country: "🇦🇷", image:"https://cdn-1.motorsport.com/images/amp/2wKpe782/s6/f1-german-gp-1957-juan-manuel-.jpg" },
  { year: 1958, car: "Ferrari 246 F1", driver: "Mike Hawthorn", team: "Ferrari", engine: "Ferrari V6 2.4", country: "🇬🇧", image:"https://i.blogs.es/3aa305/mikehawthorn_marruecos1958/450_1000.jpg"},
  { year: 1959, car: "Cooper T51", driver: "Jack Brabham", team: "Cooper", engine: "Coventry Climax L4 2.5", country: "🇦🇺", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/1959_Cooper_Climax_T51_Goodwood%2C_2009.JPG/1920px-1959_Cooper_Climax_T51_Goodwood%2C_2009.JPG"},
  { year: 1960, car: "Cooper T53", driver: "Jack Brabham", team: "Cooper", engine: "Coventry Climax L4 2.5", country: "🇦🇺", image:"https://upload.wikimedia.org/wikipedia/commons/1/14/Cooper_T51_at_Goodwood_FOS_2008_%281%29.jpg"},
  { year: 1961, car: "Ferrari 156", driver: "Phil Hill", team: "Ferrari", engine: "Ferrari V6 1.5", country: "🇺🇸", image:"https://i.blogs.es/802702/hill156/1366_2000.jpg"},
  { year: 1962, car: "BRM P57", driver: "Graham Hill", team: "BRM", engine: "BRM V8 1.5", country: "🇬🇧", image:"https://soymotor.com/sites/default/files/usuarios/redaccion/portal/mmunoz/graham_hill.jpg" },
  { year: 1963, car: "Lotus 25", driver: "Jim Clark", team: "Lotus", engine: "Coventry Climax V8 1.5", country: "SCO", image:"https://motorsportmagazine.b-cdn.net/database/wp-content/uploads/sites/2/2020/12/1963-Monaco-Grand-Prix-Jim-Clark-1.jpg"},
  { year: 1964, car: "Ferrari 158", driver: "John Surtees", team: "Ferrari", engine: "Ferrari V8 1.5", country: "🇬🇧", image:"https://cdn-6.motorsport.com/images/amp/2Qzq5vJY/s6/158-f1-de-1964-inscrito-en-el-.jpg"},
  { year: 1965, car: "Lotus 33", driver: "Jim Clark", team: "Lotus", engine: "Coventry Climax V8 1.5", country: "SCO", image:"https://cdn-images.motor.es/image/m/1320w/fotos-noticias/2021/04/gran-premio-de-belgica-de-1965-jim-clark-separo-las-aguas-202176808-1617364060_7.jpg"},
  { year: 1966, car: "Brabham BT19", driver: "Jack Brabham", team: "Brabham", engine: "Repco V8 3.0", country: "🇦🇺", image:"https://primotipo.com/wp-content/uploads/2014/11/jack-brabham-oulton-park-gold-cup-1966-brabham-bt19-repco.jpg"},
  { year: 1967, car: "Brabham BT24", driver: "Denny Hulme", team: "Brabham", engine: "Repco V8 3.0", country: "🇳🇿", image:"https://i.blogs.es/4b18b4/eaglegurneyspa1967/650_1200.jpg" },
  { year: 1968, car: "Lotus 49B", driver: "Graham Hill", team: "Lotus", engine: "Ford Cosworth DFV V8 3.0", country: "🇬🇧", image:"https://s2-ge.glbimg.com/NagbI533ZWOY4GvmuS1_rw6jVeM=/29x80:1208x960/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/R/s/lEi8JlSkOsxSYaluIO8A/hill4.jpg"},
  { year: 1969, car: "Matra MS80", driver: "Jackie Stewart", team: "Matra", engine: "Ford Cosworth DFV V8 3.0", country: "SCO", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/StewartJackie19690801MatraFord.jpg/1920px-StewartJackie19690801MatraFord.jpg"},
  { year: 1970, car: "Lotus 72", driver: "Jochen Rindt", team: "Lotus", engine: "Ford Cosworth DFV V8 3.0", country: "🇦🇹", image:"https://www.autohebdo.fr/app/uploads/2021/06/00000354_013-753x494.jpg" },
  { year: 1971, car: "Tyrrell 003", driver: "Jackie Stewart", team: "Tyrrell", engine: "Ford Cosworth DFV V8 3.0", country: "SCO", image:"https://cdn-3.motorsport.com/images/amp/0rGen4W2/s6/jackie-stewart-tyrrell-003-1.jpg"},
  { year: 1972, car: "Lotus 72D", driver: "Emerson Fittipaldi", team: "Lotus", engine: "Ford Cosworth DFV V8 3.0", country: "🇧🇷", image:"https://www.oldracingcars.com/Images/bunyan/Lotus72D-R7-Fittipaldi-GB72-600x300.jpg" },
  { year: 1973, car: "Tyrrell 006", driver: "Jackie Stewart", team: "Tyrrell", engine: "Ford Cosworth DFV V8 3.0", country: "SCO", image:"https://cdn-5.motorsport.com/images/mgl/YpNwddW0/s8/jackie-stewart-tyrrell-006-for-1.jpg" },
  { year: 1974, car: "McLaren M23", driver: "Emerson Fittipaldi", team: "McLaren", engine: "Ford Cosworth DFV V8 3.0", country: "🇧🇷", image:"https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/emerson_0.jpg" },
  { year: 1975, car: "Ferrari 312T", driver: "Niki Lauda", team: "Ferrari", engine: "Ferrari F12 3.0", country: "🇦🇹", image:"https://cdn.motorsport.com/images/mgl/01WVgroY/s1000/niki-lauda-ferrari-312t.jpg" },
  { year: 1976, car: "McLaren M23", driver: "James Hunt", team: "McLaren", engine: "Ford Cosworth DFV V8 3.0", country: "🇬🇧", image:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/10/11/16655083555274.jpg"},
  { year: 1977, car: "Ferrari 312T2", driver: "Niki Lauda", team: "Ferrari", engine: "Ferrari F12 3.0", country: "🇦🇹", image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIbNvX1XuVAZiKbUP2-mww1DiEoxU3HHC95bDCGBq3Tk2GOCmdJRvftRRSVV6LcKIXljlv2uax3KtzQ4DrNWN33Zb3_LfUFu8eEjcsrtXSsSaZh3lflni8LT8Lm1NwC-vJVnnhE9scUA/s640/ba1d8ee3955e268aded384d433727a94.jpg" },
  { year: 1978, car: "Lotus 78/79", driver: "Mario Andretti", team: "Lotus", engine: "Ford Cosworth DFV V8 3.0", country: "🇺🇸", image:"https://motorsport-motorsportmagazine.express.pugpig.com/wp-content/uploads/sites/173/2019/12/1017503241-COL-19770522-ECET1977MonacoGP_01.jpg" },
  { year: 1979, car: "Ferrari 312T4", driver: "Jody Scheckter", team: "Ferrari", engine: "Ferrari F12 3.0", country: "🇿🇦", image:"https://www.f1-fansite.com/wp-content/uploads/2019/09/saturdayitaly9-108716-1200x675.jpg" },
  { year: 1980, car: "Williams FW07B", driver: "Alan Jones", team: "Williams", engine: "Ford Cosworth DFV V8 3.0", country: "🇦🇺", image:"https://live.staticflickr.com/3033/2975712636_8ea2579904_b.jpg" },
  { year: 1981, car: "Brabham BT49C", driver: "Nelson Piquet", team: "Brabham", engine: "Ford Cosworth DFV V8 3.0", country: "🇧🇷", image:"https://upload.wikimedia.org/wikipedia/commons/a/a0/Piquetmonaco.jpg"},
  { year: 1982, car: "Williams FW08", driver: "Keke Rosberg", team: "Williams", engine: "Ford Cosworth DFV V8 3.0", country: "🇫🇮", image:"https://mobilitynews.es/wp-content/uploads/2024/04/KEKE-ROSBERG-ZANDVOORT-1982.jpg"},
  { year: 1983, car: "Brabham BT52", driver: "Nelson Piquet", team: "Brabham", engine: "BMW L4 Turbo 1.5", country: "🇧🇷", image:"https://imagenes.topgear.es/files/image_1280_720/uploads/imagenes/2023/06/26/68c9f34ad648c.jpeg"},
  { year: 1984, car: "McLaren MP4/2", driver: "Niki Lauda", team: "McLaren", engine: "TAG Porsche V6 Turbo 1.5", country: "🇦🇹", image:"https://automedia.revsinstitute.org/wp-content/uploads/2021/07/wm-mclaren-mp4-2-1-1.jpg" },
  { year: 1985, car: "McLaren MP4/2B", driver: "Alain Prost", team: "McLaren", engine: "TAG Porsche V6 Turbo 1.5", country: "🇫🇷", image:"https://cdn.motorsport.com/images/mgl/YBeBqzz2/s1000/alain-prost-mclaren-mp4-2b.jpg"},
  { year: 1986, car: "McLaren MP4/2C", driver: "Alain Prost", team: "McLaren", engine: "TAG Porsche V6 Turbo 1.5", country: "🇫🇷", image:"https://i.pinimg.com/736x/99/b1/c2/99b1c29ac1d08e8354448799270c1392.jpg"},
  { year: 1987, car: "Williams FW11B", driver: "Nelson Piquet", team: "Williams", engine: "Honda RA167E V6 Turbo 1.5", country: "🇧🇷", image:"https://www.f1-fansite.com/wp-content/uploads/2018/11/1987-Williams-Honda-FW11B-1200x675.jpg"},
  { year: 1988, car: "McLaren MP4/4", driver: "Ayrton Senna", team: "McLaren", engine: "Honda RA168E V6 Turbo 1.5", country: "🇧🇷", image:"https://cardesign.es/wp-content/uploads/2023/08/fotos_editor_33360_1692096807_mp44-senna-3.jpg"},
  { year: 1989, car: "McLaren MP4/5", driver: "Alain Prost", team: "McLaren", engine: "Honda RA109E V10 3.5", country: "🇫🇷", image:"https://i.blogs.es/d9854f/650_1000_mp4-5/650_1200.jpg"},
  { year: 1990, car: "McLaren MP4/5B", driver: "Ayrton Senna", team: "McLaren", engine: "Honda RA100E V10 3.5", country: "🇧🇷", image:"https://www.lavanguardia.com/files/image_936_458/files/fp/uploads/2025/11/21/69200f9b3b8a1.r_d.603-353-8712.jpeg" },
  { year: 1991, car: "McLaren MP4/6", driver: "Ayrton Senna", team: "McLaren", engine: "Honda RA121E V12 3.5", country: "🇧🇷", image:"https://cdn-8.motorsport.com/images/mgl/0qXqN386/s8/ayrton-senna-mclaren-mp4-6-hon-1.jpg" },
  { year: 1992, car: "Williams FW14B", driver: "Nigel Mansell", team: "Williams", engine: "Renault RS3C V10 3.5", country: "🇬🇧", image:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/09/03/15991233727863.jpg"},
  { year: 1993, car: "Williams FW15C", driver: "Alain Prost", team: "Williams", engine: "Renault RS5 V10 3.5", country: "🇫🇷", image:"https://cdn-6.motorsport.com/images/mgl/6nMQp7OY/s8/f1-canadian-gp-1993-alain-prost-williams-fw15c.jpg" },
  { year: 1994, car: "Benetton B194", driver: "Michael Schumacher", team: "Benetton", engine: "Ford Zetec-R V8 3.5", country: "🇩🇪", image:"https://cdn-1.motorsport.com/images/mgl/6DlK9VG6/s8/f1-san-marino-gp-1994-michael-schumacher-benetton-b194-ford.jpg"},
  { year: 1995, car: "Benetton B195", driver: "Michael Schumacher", team: "Benetton", engine: "Renault RS7 V10 3.0", country: "🇩🇪", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Benetton_B195_front-left2_2019_Michael_Schumacher_Private_Collection.jpg/960px-Benetton_B195_front-left2_2019_Michael_Schumacher_Private_Collection.jpg"},
  { year: 1996, car: "Williams FW18", driver: "Damon Hill", team: "Williams", engine: "Renault RS8 V10 3.0", country: "🇬🇧", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Jacques_Villeneuve_1996.jpg/1920px-Jacques_Villeneuve_1996.jpg" },
  { year: 1997, car: "Williams FW19", driver: "Jacques Villeneuve", team: "Williams", engine: "Renault RS9 V10 3.0", country: "🇨🇦", image:"https://storage.googleapis.com/fp-media/1/2020/05/XPB_1034215_HiRes-666x443.jpg" },
  { year: 1998, car: "McLaren MP4/13", driver: "Mika Häkkinen", team: "McLaren", engine: "Mercedes FO110G V10 3.0", country: "🇫🇮", image:"https://cdn-8.motorsport.com/images/mgl/0ZROrLd0/s1000/the-1998-mclaren-mp4-13-is-dri-1.jpg" },
  { year: 1999, car: "McLaren MP4/14", driver: "Mika Häkkinen", team: "McLaren", engine: "Mercedes FO110H V10 3.0", country: "🇫🇮", image:"https://www.f1-fansite.com/wp-content/uploads/2018/11/McLaren-MP4-14-Mercedes-driven-by-Mika-Hakkinen-1999.jpg"},
  { year: 2000, car: "Ferrari F1-2000", driver: "Michael Schumacher", team: "Ferrari", engine: "Ferrari Tipo 049 V10 3.0", country: "🇩🇪", image:"https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2023%2F02%2F19104011%2Fmichael-schumacher-japan-2000-planetf1.jpg" },
  { year: 2001, car: "Ferrari F2001", driver: "Michael Schumacher", team: "Ferrari", engine: "Ferrari Tipo 050 V10 3.0", country: "🇩🇪", image:"https://bucket-periodismodelmotor.s3.eu-west-3.amazonaws.com/wp-content/uploads/2014/07/venta-Ferrari-F2001-Rubens-Barrichello.jpg" },
  { year: 2002, car: "Ferrari F2002", driver: "Michael Schumacher", team: "Ferrari", engine: "Ferrari Tipo 051 V10 3.0", country: "🇩🇪", image:"https://espirituracer.com/archivos/2019/12/ferrari-f2002-5.jpg" },
  { year: 2003, car: "Ferrari F2003-GA", driver: "Michael Schumacher", team: "Ferrari", engine: "Ferrari Tipo 052 V10 3.0", country: "🇩🇪", image:"https://images.squarespace-cdn.com/content/v1/52744b67e4b0782c048b666f/1631896126502-H5TAAMO01KSHBB81G8HQ/2003-Ferrari-F2003-Show-Car_3.jpg"},
  { year: 2004, car: "Ferrari F2004", driver: "Michael Schumacher", team: "Ferrari", engine: "Ferrari Tipo 053 V10 3.0", country: "🇩🇪", image:"https://i.pinimg.com/originals/fc/eb/7e/fceb7ea25b8682247693fb04731b8938.jpg" },
  { year: 2005, car: "Renault R25", driver: "Fernando Alonso", team: "Renault", engine: "Renault RS25 V10 3.0", country: "🇪🇸", image:"https://cdn-7.motorsport.com/images/amp/0R5ANLA6/s6/f1-german-gp-2005-race-winner-.jpg" },
  { year: 2006, car: "Renault R26", driver: "Fernando Alonso", team: "Renault", engine: "Renault RS26 V8 2.4", country: "🇪🇸", image:"https://cdn-6.motorsport.com/images/amp/0qAwLDk0/s6/f1-hungarian-gp-2006-fernando-.jpg" },
  { year: 2007, car: "Ferrari F2007", driver: "Kimi Räikkönen", team: "Ferrari", engine: "Ferrari 056 V8 2.4", country: "🇫🇮", image:"https://www.f1-fansite.com/wp-content/uploads/2012/06/55523_070016ung.jpg" },
  { year: 2008, car: "McLaren MP4/23", driver: "Lewis Hamilton", team: "McLaren", engine: "Mercedes FO 108V V8 2.4", country: "🇬🇧", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Heikki_Kovalainen_2008_Canada_2.jpg/1920px-Heikki_Kovalainen_2008_Canada_2.jpg" },
  { year: 2009, car: "Brawn BGP 001", driver: "Jenson Button", team: "Brawn GP", engine: "Mercedes FO 108W V8 2.4", country: "🇬🇧", image:"https://upload.wikimedia.org/wikipedia/commons/9/97/Button_Spain_2009.jpg" },
  { year: 2010, car: "Red Bull RB6", driver: "Sebastian Vettel", team: "Red Bull", engine: "Renault RS27 V8 2.4", country: "🇩🇪", image:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Vettel_Bahrain_2010.jpg" },
  { year: 2011, car: "Red Bull RB7", driver: "Sebastian Vettel", team: "Red Bull", engine: "Renault RS27 V8 2.4", country: "🇩🇪", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/F1_2011_Test_Jerez_20.jpg/1920px-F1_2011_Test_Jerez_20.jpg"},
  { year: 2012, car: "Red Bull RB8", driver: "Sebastian Vettel", team: "Red Bull", engine: "Renault RS27 V8 2.4", country: "🇩🇪", image:"https://www.racecar-engineering.com/wp-content/gallery/red-bull-rb8/zuprb8x.jpg" },
  { year: 2013, car: "Red Bull RB9", driver: "Sebastian Vettel", team: "Red Bull", engine: "Renault RS27 V8 2.4", country: "🇩🇪", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/F1_2013_Belgian_Grand_Prix_-_Sebastian_Vettel.jpg/1920px-F1_2013_Belgian_Grand_Prix_-_Sebastian_Vettel.jpg" },
  { year: 2014, car: "Mercedes F1 W05", driver: "Lewis Hamilton", team: "Mercedes", engine: "Mercedes PU106A V6 Hybrid 1.6", country: "🇬🇧", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lewis_Hamilton_2014_China_Race.jpg/1920px-Lewis_Hamilton_2014_China_Race.jpg" },
  { year: 2015, car: "Mercedes F1 W06", driver: "Lewis Hamilton", team: "Mercedes", engine: "Mercedes PU106B V6 Hybrid 1.6", country: "🇬🇧", image:"https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/40958/foto_20portada.jpg" },
  { year: 2016, car: "Mercedes F1 W07", driver: "Nico Rosberg", team: "Mercedes", engine: "Mercedes PU106C V6 Hybrid 1.6", country: "🇩🇪", image:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Rosberg_Bahrain_2016_1.jpg" },
  { year: 2017, car: "Mercedes F1 W08", driver: "Lewis Hamilton", team: "Mercedes", engine: "Mercedes M08 EQ Power+ V6 Hybrid 1.6", country: "🇬🇧", image:"https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2017/02/Mercedes-W08-f1.jpg" },
  { year: 2018, car: "Mercedes F1 W09", driver: "Lewis Hamilton", team: "Mercedes", engine: "Mercedes M09 EQ Power+ V6 Hybrid 1.6", country: "🇬🇧", image:"https://cdn-3.motorsport.com/images/mgl/YKgrP5bY/s8/f1-mercedes-amg-f1-w09-launch-2018-valtteri-bottas-mercedes-amg-f1-w09.jpg"},
  { year: 2019, car: "Mercedes F1 W10", driver: "Lewis Hamilton", team: "Mercedes", engine: "Mercedes M10 EQ Power+ V6 Hybrid 1.6", country: "🇬🇧", image:"https://imagenes.autobild.es/files/image_640_auto/uploads/imagenes/2023/05/29/68ce7961ba341.jpeg"},
  { year: 2020, car: "Mercedes F1 W11", driver: "Lewis Hamilton", team: "Mercedes", engine: "Mercedes M11 EQ Performance V6 Hybrid 1.6", country: "🇬🇧", image:"https://www.gasolinasuper.es/wp-content/uploads/2020/10/mercedesw11_003.jpg" },
  { year: 2021, car: "Red Bull RB16B", driver: "Max Verstappen", team: "Red Bull", engine: "Honda RBPTH001 V6 Hybrid 1.6", country: "🇳🇱", image:"https://upload.wikimedia.org/wikipedia/commons/f/fa/FIA_F1_Austria_2021_Nr._33_Verstappen_%28side%29.jpg" },
  { year: 2022, car: "Red Bull RB18", driver: "Max Verstappen", team: "Red Bull", engine: "Red Bull Ford Powertrains V6 Hybrid 1.6", country: "🇳🇱", image:"https://upload.wikimedia.org/wikipedia/commons/b/b4/2022_British_Grand_Prix_%2852381405112%29.jpg"},
  { year: 2023, car: "Red Bull RB19", driver: "Max Verstappen", team: "Red Bull", engine: "Honda RBPTH001 V6 Hybrid 1.6", country: "🇳🇱", image:"https://fr.f1authentics.com/cdn/shop/files/16x9-Hero-RB19.jpg"},
  { year: 2024, car: "Red Bull RB20", driver: "Max Verstappen", team: "Red Bull", engine: "Honda RBPTH002 V6 Hybrid 1.6", country: "🇳🇱", image:"https://elintransigente.com/wp-content/uploads/2024/12/Red-Bull.jpg" },
  { year: 2025, car: "McLaren MCL39", driver: "Lando Norris", team: "McLaren", engine: "Mercedes M16 V6 Hybrid 1.6", country: "🇬🇧", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/2025_Japan_GP_-_McLaren_-_Lando_Norris_-_FP1.jpg/960px-2025_Japan_GP_-_McLaren_-_Lando_Norris_-_FP1.jpg"},
];

const DECADE_COLORS = {
  "1950s": "#8B1A1A","1960s": "#1A4A8B","1970s": "#1A6B2A","1980s": "#7A3B00",
  "1990s": "#4A1A7A","2000s": "#8B4A00","2010s": "#003366","2020s": "#1A5A1A",
};

function getDecade(year) { return `${Math.floor(year / 10) * 10}s`; }

function CarSVG({ team, year }) {
  const teamColors = {
    "Ferrari": ["#DC0000","#FFFFFF"],"McLaren": ["#FF8000","#FFFFFF"],"Mercedes": ["#00D2BE","#FFFFFF"],
    "Red Bull": ["#1E3A5F","#FFD700"],"Williams": ["#005AFF","#FFFFFF"],"Lotus": ["#000000","#FFD700"],
    "Brabham": ["#FFFFFF","#000000"],"Tyrrell": ["#003087","#FFFFFF"],"Benetton": ["#009B3A","#FFFFFF"],
    "Renault": ["#FFD700","#000080"],"Alfa Romeo": ["#9B1414","#FFFFFF"],"Maserati": ["#1E3A8A","#FFFFFF"],
    "BRM": ["#006400","#FFFFFF"],"Matra": ["#003087","#FFFFFF"],"Cooper": ["#2C5F2E","#FFFFFF"],
    "Brawn GP": ["#F5F500","#FFFFFF"],"default": ["#C8A050","#FFFFFF"],
  };
  const teamName = Object.keys(teamColors).find(t => team.includes(t)) || "default";
  const [primary, secondary] = teamColors[teamName];
  const decade = Math.floor(year / 10) * 10;
  const isModern = decade >= 2000;
  const isTurbo = decade >= 1980 && decade < 2000;
  return (
    <svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
      <ellipse cx="140" cy="90" rx="100" ry="6" fill="rgba(0,0,0,0.15)"/>
      <circle cx="75" cy="72" r={isModern?18:15} fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
      <circle cx="75" cy="72" r={isModern?11:9} fill="#2a2a2a"/>
      <circle cx="210" cy="72" r={isModern?15:13} fill="#1a1a1a" stroke="#333" strokeWidth="2"/>
      <circle cx="210" cy="72" r={isModern?9:7} fill="#2a2a2a"/>
      <path d={isModern?"M65,65 L68,45 L90,35 L170,32 L220,42 L235,55 L230,65 L190,68 L90,68 Z":"M65,65 L70,48 L95,38 L170,35 L215,45 L228,58 L220,65 L185,68 L90,68 Z"} fill={primary}/>
      <path d={isModern?"M120,35 L125,22 L155,22 L160,35 Z":"M120,38 L125,25 L152,25 L157,38 Z"} fill="#111" stroke={secondary} strokeWidth="1"/>
      <path d={isModern?"M128,27 L152,27 L150,32 L130,32 Z":"M128,28 L150,28 L148,33 L130,33 Z"} fill="#B8E0FF" opacity="0.85"/>
      <path d={isModern?"M220,55 L235,55 L245,60 L235,65 L220,65 Z":"M215,55 L228,55 L240,60 L228,65 L215,65 Z"} fill={primary}/>
      <rect x={isModern?230:225} y={isModern?60:61} width={isModern?24:22} height="3" fill={secondary} opacity="0.9"/>
      <rect x="42" y={isModern?38:42} width={isModern?22:18} height="4" fill={secondary} opacity="0.9"/>
      {isTurbo&&<><path d="M88,42 L100,38 L100,45 L88,48 Z" fill="#555"/><path d="M175,38 L187,42 L187,48 L175,45 Z" fill="#555"/></>}
      <rect x="100" y="68" width="40" height="14" rx="2" fill="rgba(0,0,0,0.6)"/>
      <text x="120" y="79" textAnchor="middle" fill={secondary} fontSize="9" fontFamily="monospace" fontWeight="bold">{year}</text>
    </svg>
  );
}

async function generateDescriptionFn(car) {
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:1000,
        system:"Eres experto en F1. Responde SIEMPRE en español. Descripción histórica apasionada estilo revista clásica. Máximo 80 palabras. Sin markdown.",
        messages:[{role:"user",content:`Descripción histórica campeón F1: ${car.year} ${car.car}, piloto ${car.driver} (${car.team}), motor ${car.engine}. Qué hizo histórico ese campeonato.`}]})
    });
    const d = await r.json();
    return d.content?.[0]?.text || "Historia no disponible.";
  } catch { return "Error al conectar con la IA."; }
}

function CarCard({ car, onGenerateDescription }) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const accentColor = DECADE_COLORS[getDecade(car.year)];
  const handleGenerate = async (e) => {
    e.stopPropagation();
    if (description) { setExpanded(!expanded); return; }
    setLoading(true);
    setDescription(await onGenerateDescription(car));
    setLoading(false); setExpanded(true);
  };
  return (
    <div style={{background:"linear-gradient(160deg,#FAF6EE 0%,#F0E8D8 100%)",border:`2px solid ${accentColor}`,borderTop:`6px solid ${accentColor}`,fontFamily:"'Times New Roman',serif",position:"relative",overflow:"hidden",transition:"transform 0.2s,box-shadow 0.2s",boxShadow:"4px 4px 0px rgba(0,0,0,0.12)"}}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="6px 8px 0px rgba(0,0,0,0.18)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="4px 4px 0px rgba(0,0,0,0.12)";}}>
      <div style={{position:"absolute",top:-8,right:-8,fontSize:80,fontFamily:"'Bebas Neue',sans-serif",color:accentColor,opacity:0.06,lineHeight:1,userSelect:"none",pointerEvents:"none"}}>{getDecade(car.year)}</div>
      <div style={{padding:"12px 14px 8px",borderBottom:`1px solid ${accentColor}30`,position:"relative",zIndex:1}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,lineHeight:1,color:accentColor}}>{car.year}</div>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:14,color:"#2a2a2a",letterSpacing:"0.08em",textTransform:"uppercase",marginTop:2}}>{car.car}</div>
          </div>
          <div style={{fontSize:26,lineHeight:1}}>{car.country}</div>
        </div>
      </div>
      <div style={{position:"relative",zIndex:1,overflow:"hidden",background:"#1a0a0a"}}>
        {car.image ? (<>
          <img src={car.image} alt={`${car.car} ${car.year}`} onError={e=>{e.target.style.display="none";e.target.nextSibling.style.display="block";}}
            style={{width:"100%",height:140,objectFit:"cover",objectPosition:"center",display:"block",filter:"sepia(15%) contrast(1.05)"}}/>
          <div style={{display:"none",padding:"8px 14px",height:140}}><CarSVG team={car.team} year={car.year}/></div>
        </>) : (<div style={{padding:"8px 14px",height:140}}><CarSVG team={car.team} year={car.year}/></div>)}
        <div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(transparent,rgba(0,0,0,0.6))",padding:"20px 12px 8px",fontFamily:"'Bebas Neue',sans-serif",fontSize:11,color:"#C8A050",letterSpacing:"0.15em"}}>
          {car.team.toUpperCase()} · {car.year}
        </div>
      </div>
      <div style={{padding:"6px 14px 10px",position:"relative",zIndex:1}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px 10px",fontSize:11,borderTop:`1px solid ${accentColor}20`,paddingTop:8}}>
          <div><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:10,color:"#888",letterSpacing:"0.1em"}}>PILOTO</div><div style={{color:"#1a1a1a",fontWeight:"bold",fontSize:12}}>{car.driver}</div></div>
          <div><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:10,color:"#888",letterSpacing:"0.1em"}}>ESCUDERÍA</div><div style={{color:"#1a1a1a",fontWeight:"bold",fontSize:12}}>{car.team}</div></div>
          <div style={{gridColumn:"1/-1",marginTop:4}}><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:10,color:"#888",letterSpacing:"0.1em"}}>MOTOR</div><div style={{color:"#444",fontSize:11,fontStyle:"italic"}}>{car.engine}</div></div>
        </div>
        {expanded&&description&&<div style={{marginTop:10,padding:"8px 10px",background:`${accentColor}10`,borderLeft:`3px solid ${accentColor}`,fontSize:11,lineHeight:1.6,color:"#2a2a2a",fontStyle:"italic"}}>{description}</div>}
        <button onClick={handleGenerate} disabled={loading} style={{marginTop:10,width:"100%",padding:"7px 0",background:loading?"#ddd":accentColor,color:loading?"#888":"#FAF6EE",border:"none",cursor:loading?"not-allowed":"pointer",fontFamily:"'Bebas Neue',sans-serif",fontSize:13,letterSpacing:"0.1em"}}>
          {loading?"⏳ GENERANDO...":description&&expanded?"◀ OCULTAR HISTORIA":description?"▶ VER HISTORIA":"✦ GENERAR HISTORIA CON IA"}
        </button>
      </div>
    </div>
  );
}

export default function F1Collection() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [generatedCount, setGeneratedCount] = useState(0);
  const urlYear = parseInt(new URLSearchParams(window.location.search).get("year"));
  const qrCar = urlYear ? F1_CARS.find(c => c.year === urlYear) : null;
  const decades = ["all","1950s","1960s","1970s","1980s","1990s","2000s","2010s","2020s"];
  const filtered = F1_CARS.filter(car => {
    const matchDecade = filter==="all" || getDecade(car.year)===filter;
    const matchSearch = !search || car.driver.toLowerCase().includes(search.toLowerCase()) ||
      car.car.toLowerCase().includes(search.toLowerCase()) ||
      car.team.toLowerCase().includes(search.toLowerCase()) ||
      String(car.year).includes(search);
    return matchDecade && matchSearch;
  });
  const generateDescription = async (car) => { const t = await generateDescriptionFn(car); setGeneratedCount(c=>c+1); return t; };

  if (qrCar) return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#F5EDD8 0%,#EDE0C4 50%,#F5EDD8 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24}}>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
      <div style={{width:"100%",maxWidth:360}}>
        <div style={{textAlign:"center",marginBottom:16}}><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:14,color:"#8B1A1A",letterSpacing:"0.2em"}}>GRANDES PREMIOS · CAMPEÓN DEL MUNDO</div></div>
        <CarCard car={qrCar} onGenerateDescription={generateDescriptionFn}/>
        <div style={{textAlign:"center",marginTop:16}}><a href="/" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:12,color:"#8B1A1A",letterSpacing:"0.15em",textDecoration:"none"}}>VER COLECCIÓN COMPLETA →</a></div>
      </div>
    </div>
  );

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#F5EDD8 0%,#EDE0C4 50%,#F5EDD8 100%)",fontFamily:"'Times New Roman',serif"}}>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
      <div style={{textAlign:"center",padding:"48px 24px 32px",borderBottom:"3px double #8B1A1A",background:"linear-gradient(180deg,#2a0a0a 0%,#1a0505 100%)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:0,left:0,right:0,height:"4px",background:"linear-gradient(90deg,#8B1A1A,#C8A050,#8B1A1A,#C8A050,#8B1A1A)"}}/>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(36px,8vw,72px)",color:"#C8A050",letterSpacing:"0.1em",lineHeight:1,textShadow:"2px 2px 0px rgba(0,0,0,0.5)"}}>GRANDES PREMIOS</div>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(14px,3vw,22px)",color:"#FAF6EE",letterSpacing:"0.3em",borderTop:"1px solid #C8A050",borderBottom:"1px solid #C8A050",padding:"6px 0",margin:"8px auto",maxWidth:480}}>COLECCIÓN CAMPEONES DEL MUNDO · 1950 – 2025</div>
        <div style={{color:"#C8A05080",fontSize:13,fontStyle:"italic",marginTop:4}}>76 monoplazas legendarios · Historia generada por Inteligencia Artificial</div>
        {generatedCount>0&&<div style={{display:"inline-block",marginTop:12,padding:"4px 16px",background:"#C8A050",color:"#1a0505",fontFamily:"'Bebas Neue',sans-serif",fontSize:14,letterSpacing:"0.1em"}}>{generatedCount} HISTORIA{generatedCount!==1?"S":""} GENERADA{generatedCount!==1?"S":""}</div>}
      </div>
      <div style={{background:"#F0E4C8",borderBottom:"2px solid #C8A050",padding:"16px 24px",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>
        <div style={{maxWidth:1400,margin:"0 auto"}}>
          <div style={{marginBottom:12,display:"flex",gap:10,alignItems:"center"}}>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:14,color:"#8B1A1A",letterSpacing:"0.1em",whiteSpace:"nowrap"}}>🔍 BUSCAR:</span>
            <input type="text" placeholder="Piloto, coche, escudería o año..." value={search} onChange={e=>setSearch(e.target.value)}
              style={{flex:1,maxWidth:380,padding:"7px 12px",background:"#FAF6EE",border:"1px solid #C8A050",fontFamily:"'Times New Roman',serif",fontSize:13,color:"#1a1a1a",outline:"none"}}/>
            {search&&<button onClick={()=>setSearch("")} style={{background:"#8B1A1A",color:"#FAF6EE",border:"none",padding:"7px 12px",cursor:"pointer",fontFamily:"'Bebas Neue',sans-serif",fontSize:13}}>✕ LIMPIAR</button>}
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"}}>
            <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:14,color:"#8B1A1A",letterSpacing:"0.1em",marginRight:4}}>DÉCADAS:</span>
            {decades.map(d=>(
              <button key={d} onClick={()=>setFilter(d)} style={{padding:"5px 14px",background:filter===d?(d==="all"?"#8B1A1A":DECADE_COLORS[d]||"#8B1A1A"):"transparent",color:filter===d?"#FAF6EE":"#444",border:`1px solid ${d==="all"?"#8B1A1A":DECADE_COLORS[d]||"#8B1A1A"}`,cursor:"pointer",fontFamily:"'Bebas Neue',sans-serif",fontSize:13,letterSpacing:"0.05em",transition:"all 0.15s"}}>
                {d==="all"?"TODOS":d}
              </button>
            ))}
            <span style={{marginLeft:"auto",fontFamily:"'Bebas Neue',sans-serif",fontSize:13,color:"#888"}}>{filtered.length} MONOPLACE{filtered.length!==1?"S":""}</span>
          </div>
        </div>
      </div>
      <div style={{maxWidth:1400,margin:"0 auto",padding:"32px 24px"}}>
        {filter==="all"?(
          Object.entries(F1_CARS.reduce((acc,car)=>{
            if(!filtered.includes(car))return acc;
            const d=getDecade(car.year);
            if(!acc[d])acc[d]=[];
            acc[d].push(car);
            return acc;
          },{})).map(([decade,cars])=>(
            <div key={decade} style={{marginBottom:48}}>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:38,color:DECADE_COLORS[decade],letterSpacing:"0.05em",borderBottom:`2px solid ${DECADE_COLORS[decade]}`,paddingBottom:4,marginBottom:20}}>{decade}</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:20}}>
                {cars.map(car=><CarCard key={car.year} car={car} onGenerateDescription={generateDescription}/>)}
              </div>
            </div>
          ))
        ):(
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:20}}>
            {filtered.map(car=><CarCard key={car.year} car={car} onGenerateDescription={generateDescription}/>)}
          </div>
        )}
        {filtered.length===0&&<div style={{textAlign:"center",padding:"80px 24px"}}><div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:36,color:"#C8A050"}}>SIN RESULTADOS</div></div>}
      </div>
      <div style={{textAlign:"center",padding:"24px",borderTop:"3px double #8B1A1A",background:"#1a0505",color:"#C8A050",fontFamily:"'Bebas Neue',sans-serif",letterSpacing:"0.2em",fontSize:13}}>
        COLECCIÓN PRIVADA · 76 MONOPLAZAS CAMPEONES DEL MUNDO · 1950–2025
      </div>
    </div>
  );
}
