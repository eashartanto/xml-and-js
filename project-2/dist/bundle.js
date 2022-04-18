(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const products = require("../data/data.json");

const getAll = ({ id, first_name, last_name, email }) =>
  new Promise((resolve) => {
    let result = Array.from(products);

    if (id) {
      result = result.filter((item) => item.id === id);
    }

    if (first_name) {
      result = result.filter((item) => item.first_name === first_name);
    }

    if (last_name) {
        result = result.filter((item) => item.last_name === last_name);
      }
    if (email) {
      result = result.filter((item) => item.email === email);
    }
    
    resolve({ code: 200, data: JSON.stringify(result) });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const product = products.find((product) => product.id === id);

    if (product) {
      resolve({ code: 200, data: JSON.stringify(product) });
    } else {
      resolve({
        code: 404,
        data: { message: `No product found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};

},{"../data/data.json":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"first_name":"Elyse","last_name":"Cicconetti","email":"ecicconetti0@aboutads.info"},
{"id":2,"first_name":"Annelise","last_name":"Foulkes","email":"afoulkes1@surveymonkey.com"},
{"id":3,"first_name":"Hortense","last_name":"Izkovicz","email":"hizkovicz2@cbsnews.com"},
{"id":4,"first_name":"Rebeca","last_name":"Crasford","email":"rcrasford3@purevolume.com"},
{"id":5,"first_name":"Webb","last_name":"Waterland","email":"wwaterland4@creativecommons.org"},
{"id":6,"first_name":"Skippy","last_name":"McReidy","email":"smcreidy5@ovh.net"},
{"id":7,"first_name":"Alleyn","last_name":"MattiCCI","email":"amatticci6@google.com"},
{"id":8,"first_name":"Corissa","last_name":"Chillingworth","email":"cchillingworth7@mapy.cz"},
{"id":9,"first_name":"Philippe","last_name":"Simonich","email":"psimonich8@people.com.cn"},
{"id":10,"first_name":"Loren","last_name":"Ismirnioglou","email":"lismirnioglou9@engadget.com"},
{"id":11,"first_name":"Devi","last_name":"Barrie","email":"dbarriea@npr.org"},
{"id":12,"first_name":"Cosme","last_name":"Aiers","email":"caiersb@myspace.com"},
{"id":13,"first_name":"Rozalin","last_name":"Storry","email":"rstorryc@usgs.gov"},
{"id":14,"first_name":"Giacomo","last_name":"Ranstead","email":"gransteadd@psu.edu"},
{"id":15,"first_name":"Pascale","last_name":"Pimbley","email":"ppimbleye@nbcnews.com"},
{"id":16,"first_name":"Jameson","last_name":"Shieber","email":"jshieberf@ameblo.jp"},
{"id":17,"first_name":"Willie","last_name":"Swarbrigg","email":"wswarbriggg@blogtalkradio.com"},
{"id":18,"first_name":"Teddy","last_name":"Satyford","email":"tsatyfordh@scientificamerican.com"},
{"id":19,"first_name":"Carroll","last_name":"Loy","email":"cloyi@facebook.com"},
{"id":20,"first_name":"Yule","last_name":"Gladbach","email":"ygladbachj@cornell.edu"},
{"id":21,"first_name":"Tatum","last_name":"Haythornthwaite","email":"thaythornthwaitek@networkadvertising.org"},
{"id":22,"first_name":"Seamus","last_name":"Claypoole","email":"sclaypoolel@whitehouse.gov"},
{"id":23,"first_name":"Eileen","last_name":"Goscomb","email":"egoscombm@army.mil"},
{"id":24,"first_name":"Lizbeth","last_name":"Caw","email":"lcawn@studiopress.com"},
{"id":25,"first_name":"Felice","last_name":"Lamond","email":"flamondo@statcounter.com"},
{"id":26,"first_name":"Catie","last_name":"Nucciotti","email":"cnucciottip@biblegateway.com"},
{"id":27,"first_name":"Lemmy","last_name":"Rymour","email":"lrymourq@w3.org"},
{"id":28,"first_name":"Crystal","last_name":"Lavis","email":"clavisr@salon.com"},
{"id":29,"first_name":"Woody","last_name":"Suggate","email":"wsuggates@addthis.com"},
{"id":30,"first_name":"Conroy","last_name":"Ferrettino","email":"cferrettinot@slideshare.net"},
{"id":31,"first_name":"Yetta","last_name":"Gavozzi","email":"ygavozziu@slideshare.net"},
{"id":32,"first_name":"Eadith","last_name":"De Matteis","email":"edematteisv@sbwire.com"},
{"id":33,"first_name":"Timothy","last_name":"Rotchell","email":"trotchellw@webeden.co.uk"},
{"id":34,"first_name":"Isiahi","last_name":"Collard","email":"icollardx@bravesites.com"},
{"id":35,"first_name":"Andrea","last_name":"Rae","email":"araey@tiny.cc"},
{"id":36,"first_name":"Berkly","last_name":"Martyn","email":"bmartynz@marketwatch.com"},
{"id":37,"first_name":"Collin","last_name":"Ogelsby","email":"cogelsby10@cafepress.com"},
{"id":38,"first_name":"Marchelle","last_name":"Bernhard","email":"mbernhard11@purevolume.com"},
{"id":39,"first_name":"Barr","last_name":"Baskerfield","email":"bbaskerfield12@netvibes.com"},
{"id":40,"first_name":"Dorelle","last_name":"Baptist","email":"dbaptist13@amazon.com"},
{"id":41,"first_name":"Barnard","last_name":"Breckin","email":"bbreckin14@fda.gov"},
{"id":42,"first_name":"Minna","last_name":"Ferenczy","email":"mferenczy15@privacy.gov.au"},
{"id":43,"first_name":"Maribelle","last_name":"Walford","email":"mwalford16@discuz.net"},
{"id":44,"first_name":"Berri","last_name":"Chezelle","email":"bchezelle17@ca.gov"},
{"id":45,"first_name":"Morey","last_name":"Chatenet","email":"mchatenet18@vinaora.com"},
{"id":46,"first_name":"Renault","last_name":"Capaldo","email":"rcapaldo19@illinois.edu"},
{"id":47,"first_name":"Mohandis","last_name":"Jaggar","email":"mjaggar1a@biblegateway.com"},
{"id":48,"first_name":"Kipp","last_name":"Gaywood","email":"kgaywood1b@feedburner.com"},
{"id":49,"first_name":"Ilsa","last_name":"Tremonte","email":"itremonte1c@census.gov"},
{"id":50,"first_name":"Darlene","last_name":"Gaskall","email":"dgaskall1d@macromedia.com"},
{"id":51,"first_name":"Aube","last_name":"Dunbleton","email":"adunbleton1e@1und1.de"},
{"id":52,"first_name":"Tobit","last_name":"Patters","email":"tpatters1f@myspace.com"},
{"id":53,"first_name":"Sonni","last_name":"Trees","email":"strees1g@forbes.com"},
{"id":54,"first_name":"Sharron","last_name":"Marsters","email":"smarsters1h@google.co.uk"},
{"id":55,"first_name":"Ruthie","last_name":"Withers","email":"rwithers1i@moonfruit.com"},
{"id":56,"first_name":"Catlin","last_name":"Andrzejczak","email":"candrzejczak1j@vimeo.com"},
{"id":57,"first_name":"Kelsy","last_name":"Quare","email":"kquare1k@ebay.com"},
{"id":58,"first_name":"Giordano","last_name":"Prozescky","email":"gprozescky1l@cpanel.net"},
{"id":59,"first_name":"Griswold","last_name":"Sanday","email":"gsanday1m@hatena.ne.jp"},
{"id":60,"first_name":"Trish","last_name":"Sandercock","email":"tsandercock1n@un.org"},
{"id":61,"first_name":"Quentin","last_name":"Kubik","email":"qkubik1o@senate.gov"},
{"id":62,"first_name":"Maribel","last_name":"Cowill","email":"mcowill1p@comsenz.com"},
{"id":63,"first_name":"Nariko","last_name":"Paterson","email":"npaterson1q@1688.com"},
{"id":64,"first_name":"Pincas","last_name":"Hellin","email":"phellin1r@usatoday.com"},
{"id":65,"first_name":"Krystle","last_name":"Oxer","email":"koxer1s@japanpost.jp"},
{"id":66,"first_name":"Lawry","last_name":"Ringsell","email":"lringsell1t@trellian.com"},
{"id":67,"first_name":"Pren","last_name":"Bulman","email":"pbulman1u@nydailynews.com"},
{"id":68,"first_name":"Yvor","last_name":"Cramb","email":"ycramb1v@vimeo.com"},
{"id":69,"first_name":"Gracie","last_name":"Hartfleet","email":"ghartfleet1w@paginegialle.it"},
{"id":70,"first_name":"Ilysa","last_name":"Allchorn","email":"iallchorn1x@mtv.com"},
{"id":71,"first_name":"Tobi","last_name":"Candlish","email":"tcandlish1y@twitpic.com"},
{"id":72,"first_name":"Augustine","last_name":"Dankersley","email":"adankersley1z@alexa.com"},
{"id":73,"first_name":"Emilie","last_name":"McGeaney","email":"emcgeaney20@si.edu"},
{"id":74,"first_name":"Duke","last_name":"Forsard","email":"dforsard21@php.net"},
{"id":75,"first_name":"Wilone","last_name":"Browse","email":"wbrowse22@netscape.com"},
{"id":76,"first_name":"Tabby","last_name":"Darkott","email":"tdarkott23@google.nl"},
{"id":77,"first_name":"Rozalin","last_name":"Overnell","email":"rovernell24@wikimedia.org"},
{"id":78,"first_name":"Edee","last_name":"Pagram","email":"epagram25@independent.co.uk"},
{"id":79,"first_name":"Willey","last_name":"Bondley","email":"wbondley26@umich.edu"},
{"id":80,"first_name":"Stearn","last_name":"Fillingham","email":"sfillingham27@tinyurl.com"},
{"id":81,"first_name":"Rosabelle","last_name":"Elwell","email":"relwell28@narod.ru"},
{"id":82,"first_name":"Bennie","last_name":"Kainz","email":"bkainz29@imgur.com"},
{"id":83,"first_name":"Kristos","last_name":"Egerton","email":"kegerton2a@arizona.edu"},
{"id":84,"first_name":"Hanna","last_name":"Fountain","email":"hfountain2b@google.co.uk"},
{"id":85,"first_name":"Georgeanne","last_name":"Dumsday","email":"gdumsday2c@harvard.edu"},
{"id":86,"first_name":"Welch","last_name":"Riddle","email":"wriddle2d@cyberchimps.com"},
{"id":87,"first_name":"Karl","last_name":"MacKimm","email":"kmackimm2e@networkadvertising.org"},
{"id":88,"first_name":"Louisette","last_name":"Koppel","email":"lkoppel2f@prlog.org"},
{"id":89,"first_name":"Nicholle","last_name":"Bannon","email":"nbannon2g@oaic.gov.au"},
{"id":90,"first_name":"Wernher","last_name":"Frye","email":"wfrye2h@bloglovin.com"},
{"id":91,"first_name":"Blisse","last_name":"Ferrieres","email":"bferrieres2i@huffingtonpost.com"},
{"id":92,"first_name":"Tito","last_name":"Milburne","email":"tmilburne2j@csmonitor.com"},
{"id":93,"first_name":"Milka","last_name":"Tallowin","email":"mtallowin2k@123-reg.co.uk"},
{"id":94,"first_name":"Danny","last_name":"Besse","email":"dbesse2l@technorati.com"},
{"id":95,"first_name":"Kaela","last_name":"Goford","email":"kgoford2m@topsy.com"},
{"id":96,"first_name":"Myca","last_name":"Eccleshall","email":"meccleshall2n@army.mil"},
{"id":97,"first_name":"Agustin","last_name":"Rielly","email":"arielly2o@cornell.edu"},
{"id":98,"first_name":"Bartie","last_name":"Jopp","email":"bjopp2p@skype.com"},
{"id":99,"first_name":"Sabine","last_name":"Meins","email":"smeins2q@deviantart.com"},
{"id":100,"first_name":"Doria","last_name":"Monery","email":"dmonery2r@icio.us"},
{"id":101,"first_name":"Guillaume","last_name":"Bracknall","email":"gbracknall2s@nbcnews.com"},
{"id":102,"first_name":"Worthy","last_name":"Bullene","email":"wbullene2t@mozilla.com"},
{"id":103,"first_name":"Lay","last_name":"Bransden","email":"lbransden2u@sohu.com"},
{"id":104,"first_name":"Kenny","last_name":"Martinello","email":"kmartinello2v@live.com"},
{"id":105,"first_name":"Shayna","last_name":"Cronk","email":"scronk2w@google.es"},
{"id":106,"first_name":"Jobye","last_name":"Frenzl","email":"jfrenzl2x@wp.com"},
{"id":107,"first_name":"Leah","last_name":"Kilian","email":"lkilian2y@time.com"},
{"id":108,"first_name":"Normy","last_name":"Clouter","email":"nclouter2z@independent.co.uk"},
{"id":109,"first_name":"Wynn","last_name":"Fairs","email":"wfairs30@symantec.com"},
{"id":110,"first_name":"Antonella","last_name":"Twelvetree","email":"atwelvetree31@google.com.hk"},
{"id":111,"first_name":"Wallie","last_name":"Caso","email":"wcaso32@a8.net"},
{"id":112,"first_name":"Godfrey","last_name":"Flieger","email":"gflieger33@ted.com"},
{"id":113,"first_name":"Dmitri","last_name":"Leeming","email":"dleeming34@adobe.com"},
{"id":114,"first_name":"Marlowe","last_name":"Curee","email":"mcuree35@arizona.edu"},
{"id":115,"first_name":"Heddie","last_name":"Cattrell","email":"hcattrell36@sourceforge.net"},
{"id":116,"first_name":"Kellsie","last_name":"Munnery","email":"kmunnery37@bloglovin.com"},
{"id":117,"first_name":"Allison","last_name":"Jelphs","email":"ajelphs38@technorati.com"},
{"id":118,"first_name":"Vivia","last_name":"Cowely","email":"vcowely39@shutterfly.com"},
{"id":119,"first_name":"Dulcia","last_name":"Earwicker","email":"dearwicker3a@delicious.com"},
{"id":120,"first_name":"Bealle","last_name":"Streatfield","email":"bstreatfield3b@nymag.com"},
{"id":121,"first_name":"Granger","last_name":"Fairholme","email":"gfairholme3c@scribd.com"},
{"id":122,"first_name":"Edgard","last_name":"Bondley","email":"ebondley3d@themeforest.net"},
{"id":123,"first_name":"Aurea","last_name":"Greeve","email":"agreeve3e@pcworld.com"},
{"id":124,"first_name":"Damian","last_name":"Van De Cappelle","email":"dvandecappelle3f@globo.com"},
{"id":125,"first_name":"Tatiana","last_name":"Attril","email":"tattril3g@homestead.com"},
{"id":126,"first_name":"Antoinette","last_name":"Postill","email":"apostill3h@unesco.org"},
{"id":127,"first_name":"Constantino","last_name":"Silcock","email":"csilcock3i@zdnet.com"},
{"id":128,"first_name":"Onida","last_name":"Boater","email":"oboater3j@studiopress.com"},
{"id":129,"first_name":"Aveline","last_name":"Bonn","email":"abonn3k@webs.com"},
{"id":130,"first_name":"Sibella","last_name":"Imm","email":"simm3l@fotki.com"},
{"id":131,"first_name":"Levey","last_name":"Prendeville","email":"lprendeville3m@slate.com"},
{"id":132,"first_name":"Desdemona","last_name":"Macauley","email":"dmacauley3n@people.com.cn"},
{"id":133,"first_name":"Bradly","last_name":"Balffye","email":"bbalffye3o@g.co"},
{"id":134,"first_name":"Lindi","last_name":"Grisewood","email":"lgrisewood3p@census.gov"},
{"id":135,"first_name":"Cassey","last_name":"Farlam","email":"cfarlam3q@sciencedirect.com"},
{"id":136,"first_name":"Godart","last_name":"Coffin","email":"gcoffin3r@aol.com"},
{"id":137,"first_name":"Minor","last_name":"Sabie","email":"msabie3s@deviantart.com"},
{"id":138,"first_name":"Merrilee","last_name":"Cumbers","email":"mcumbers3t@dell.com"},
{"id":139,"first_name":"Ty","last_name":"Claris","email":"tclaris3u@vinaora.com"},
{"id":140,"first_name":"Chiarra","last_name":"Svanetti","email":"csvanetti3v@google.it"},
{"id":141,"first_name":"Shurlocke","last_name":"Ropars","email":"sropars3w@fastcompany.com"},
{"id":142,"first_name":"Husein","last_name":"Nichols","email":"hnichols3x@unblog.fr"},
{"id":143,"first_name":"Bessy","last_name":"Tax","email":"btax3y@hostgator.com"},
{"id":144,"first_name":"Briny","last_name":"Austwick","email":"baustwick3z@wsj.com"},
{"id":145,"first_name":"Fawnia","last_name":"Keppy","email":"fkeppy40@webnode.com"},
{"id":146,"first_name":"Katrinka","last_name":"Fihelly","email":"kfihelly41@google.ca"},
{"id":147,"first_name":"Paige","last_name":"Yurlov","email":"pyurlov42@dailymail.co.uk"},
{"id":148,"first_name":"Brigg","last_name":"Van der Mark","email":"bvandermark43@shop-pro.jp"},
{"id":149,"first_name":"Carling","last_name":"McCritchie","email":"cmccritchie44@multiply.com"},
{"id":150,"first_name":"Timothee","last_name":"Strange","email":"tstrange45@virginia.edu"},
{"id":151,"first_name":"Morissa","last_name":"Pelchat","email":"mpelchat46@google.fr"},
{"id":152,"first_name":"Abra","last_name":"Gregorace","email":"agregorace47@gizmodo.com"},
{"id":153,"first_name":"Cullan","last_name":"Daniel","email":"cdaniel48@china.com.cn"},
{"id":154,"first_name":"Luke","last_name":"Clinnick","email":"lclinnick49@shinystat.com"},
{"id":155,"first_name":"Britt","last_name":"Hanner","email":"bhanner4a@surveymonkey.com"},
{"id":156,"first_name":"Serena","last_name":"Milbank","email":"smilbank4b@mapquest.com"},
{"id":157,"first_name":"Easter","last_name":"Potts","email":"epotts4c@fda.gov"},
{"id":158,"first_name":"Niki","last_name":"Brunelli","email":"nbrunelli4d@yahoo.com"},
{"id":159,"first_name":"Thayne","last_name":"Raw","email":"traw4e@twitter.com"},
{"id":160,"first_name":"Tomkin","last_name":"Arter","email":"tarter4f@diigo.com"},
{"id":161,"first_name":"Luciano","last_name":"Mallam","email":"lmallam4g@japanpost.jp"},
{"id":162,"first_name":"Jehanna","last_name":"Gudgion","email":"jgudgion4h@canalblog.com"},
{"id":163,"first_name":"Ryley","last_name":"Severy","email":"rsevery4i@jigsy.com"},
{"id":164,"first_name":"Phillis","last_name":"Brozsset","email":"pbrozsset4j@go.com"},
{"id":165,"first_name":"Ede","last_name":"Dalli","email":"edalli4k@mapy.cz"},
{"id":166,"first_name":"Joete","last_name":"Fancett","email":"jfancett4l@china.com.cn"},
{"id":167,"first_name":"Sapphira","last_name":"Spinello","email":"sspinello4m@reference.com"},
{"id":168,"first_name":"Jodi","last_name":"Kliment","email":"jkliment4n@cmu.edu"},
{"id":169,"first_name":"Dorey","last_name":"Lepere","email":"dlepere4o@google.it"},
{"id":170,"first_name":"Amory","last_name":"Vaux","email":"avaux4p@walmart.com"},
{"id":171,"first_name":"Clarette","last_name":"Andrichuk","email":"candrichuk4q@shinystat.com"},
{"id":172,"first_name":"Abelard","last_name":"Bellworthy","email":"abellworthy4r@redcross.org"},
{"id":173,"first_name":"Gayle","last_name":"Verheijden","email":"gverheijden4s@vimeo.com"},
{"id":174,"first_name":"Stanislaus","last_name":"Jarlmann","email":"sjarlmann4t@economist.com"},
{"id":175,"first_name":"Christiana","last_name":"Brasner","email":"cbrasner4u@privacy.gov.au"},
{"id":176,"first_name":"Antoinette","last_name":"Scogin","email":"ascogin4v@newsvine.com"},
{"id":177,"first_name":"Barron","last_name":"Papa","email":"bpapa4w@mashable.com"},
{"id":178,"first_name":"Kimberli","last_name":"Bliss","email":"kbliss4x@google.fr"},
{"id":179,"first_name":"Arlette","last_name":"Farmar","email":"afarmar4y@mlb.com"},
{"id":180,"first_name":"Kelsi","last_name":"Barnaclough","email":"kbarnaclough4z@time.com"},
{"id":181,"first_name":"Tammie","last_name":"Perllman","email":"tperllman50@accuweather.com"},
{"id":182,"first_name":"Faythe","last_name":"Destouche","email":"fdestouche51@whitehouse.gov"},
{"id":183,"first_name":"Dino","last_name":"Whittles","email":"dwhittles52@barnesandnoble.com"},
{"id":184,"first_name":"Claribel","last_name":"Sparhawk","email":"csparhawk53@mapy.cz"},
{"id":185,"first_name":"Trent","last_name":"Dilloway","email":"tdilloway54@com.com"},
{"id":186,"first_name":"Adey","last_name":"Samudio","email":"asamudio55@furl.net"},
{"id":187,"first_name":"Bekki","last_name":"Cosans","email":"bcosans56@bloomberg.com"},
{"id":188,"first_name":"Shelli","last_name":"Benjamin","email":"sbenjamin57@aol.com"},
{"id":189,"first_name":"Rivi","last_name":"Sodory","email":"rsodory58@bloglines.com"},
{"id":190,"first_name":"Georgetta","last_name":"Couper","email":"gcouper59@creativecommons.org"},
{"id":191,"first_name":"Yevette","last_name":"Windley","email":"ywindley5a@tamu.edu"},
{"id":192,"first_name":"Corry","last_name":"Sante","email":"csante5b@digg.com"},
{"id":193,"first_name":"Bebe","last_name":"Casley","email":"bcasley5c@comsenz.com"},
{"id":194,"first_name":"Broddy","last_name":"Addeycott","email":"baddeycott5d@slashdot.org"},
{"id":195,"first_name":"Werner","last_name":"Mahmood","email":"wmahmood5e@smugmug.com"},
{"id":196,"first_name":"Brendin","last_name":"Stelfax","email":"bstelfax5f@globo.com"},
{"id":197,"first_name":"Ollie","last_name":"Hasselby","email":"ohasselby5g@samsung.com"},
{"id":198,"first_name":"Orly","last_name":"Ary","email":"oary5h@spiegel.de"},
{"id":199,"first_name":"Perren","last_name":"Kleimt","email":"pkleimt5i@harvard.edu"},
{"id":200,"first_name":"Dorette","last_name":"Licari","email":"dlicari5j@addtoany.com"}]
},{}],3:[function(require,module,exports){
const { getAll } = require("./api/item.js");

const table = document.getElementById("table-body");
const filterNames = ['first_name', 'last_name', 'email'];

const loadData = path => new Promise(resolve => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
});

const generateHtmlRow = (row) => {
    return `<tr><td>${row.id}</td>` +
    `<td>${row.first_name}</td>` +
    `<td>${row.last_name}</td>` +
    `<td>${row.email}</td>`
}

const renderTable = (data, terms) => {
    let resultingTable = data;
    if (terms) {
        terms.forEach(term => {
            if (term.value.length > 0) {
                resultingTable = resultingTable.filter(entry => entry[term.name].toLowerCase().includes(term.value));
            }
        });
    }
    const htmlString = resultingTable.reduce(((prev, next) => prev + generateHtmlRow(next)), "");
    table.innerHTML = htmlString;
}

getAll().then((data) => renderTable(data));

const onSubmit = (event) => {
    event.preventDefault();

    const terms = filterNames.map(name => {
        return { name, value: event.target[name].value }
    });
  
    getAll().then((data) => renderTable(data, terms));
};

const onReset = () => {
    getAll().then((data) => renderTable(data));
};
},{"./api/item.js":1}]},{},[3]);
