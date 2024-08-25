const canvas = require("./canvas.js")
let hex = "646174613a696d6167652f706e673b6261736536342c6956424f5277304b47676f414141414e5355684555674141414e7741414141654341594141414248656e412b4141414141584e535230494172733463365141414565314a524546556546377457336441564765322f31324b5133656b49364345496b4a6f5151524645785872616c3545346d7273735132596657743073792b366173716d57474c6371486d757a42673155534e71374739314c59684b62494e6f4542514c696f3069525232474969506c766a3133356c37764445337a584766334f666366357335587a766e4f4f622f54766f47423654464a7743534246795942356f56524d6848366c3545414b7750374c38504d433253455563446f396d3530426c36677645326b6442497741633534706d41436e50466b627a544b4a73415a54665447443748474f2f724c53396b454f4f50702f6b6d456d374442466c61313238437751357577777a4a4473455a32304868732f67724b4d766c4d734577513173686d2f4972567253394a54413448693631674d427279704176506666392f386f596d77426b49654c70694d49435a714c5561685930547131735550396b55734549336667574e5a6e3378336653535a314658553841424b2f584152637777374359773749422f4b2b4d79416135464f7a41425469516172583066414d767362785677326e6e4c425a4270375774776d79413130454954774c6d343356772f597353694151774c54357062583238704b53337a69584a304c4d7178616c66397256796836412b474c5141776939754c6746686a633130764f724a4d4d68645a7071317867316e6a4d62444d4c4148453078577275585638354b466f305767324237565730324839614b72496735547267647777416f7346784f2b683557634d69443744587159496c35676f79324d5a75436d3659553454433954335750723075436a4770414a77317131374d71364c6350333672662b7153344279514662576f50504b6a4c6558416e6766697353566f444d79624e4a5465634c57654f434e51627552506e2b38513947655755754c4d6847474452526b794f7642344f417441573447786945655752694d53796942412f7269413179424f37633643656c596a522b357a786667685147596a584c5963652f4f71454971766b45344372683143556a4355467a4541677a6e78727669486f35684765796777536a497550316e496b3367697567476f5a6a373769426578524251494e452b2f466f337146766c53637837457a33727674447255764b325365797a7a4745413753644f2b474f4b6c61323664344d563571313946512b45665a3759336b48536232496d2f6c4266627a6d45634e4642576e4c47316b72396e3675374937386c75754c7657775a6349314c6c33624564326e41626e796954485747424d576c4870356c6676393439554541367a77787768774f52346276572b43357a6876674567506d435a39416148426e4c565430504976596f476b6d564474446367626e355975412b4163666e77726a4f494673456e4b474845744d7a6233446e774d5979347a6c483865524d345069327166476e6c4a4941352b352b59304a362b6f5458436f73432b33415a674f472b72586c4351363870666d6659434c334d776a44543449484b702f74503372584f7270573056777934616b6734454f7848434135674a5163472f6a7365474f4c3350726a476757305431756e4e4a5a567367774a566b48424139555535393034503764384a447a6a41726b516342796f6173345647414f686673526e333042376a4d555550764c525858317a443139697542315a44486f6b4f6753345a622b6735427a316a4631384c6b43307962472b736b6530676e51554870552f713157744c43575065634b634a344553424931456d7377655155467269743344586e6a6c4c2b76662f3772466651455a4a6b7a55746f4b384a3443525756554f6a6f33656a734c417238764f37615a65787a5034527735664d6358572f3863475274476b6472756446463875535a476f414656567178364550565233444a4a4a48453530363330673372385643546131743050317937306737682f766274327a2b636f75543039323543516b4c5334754b41732f75327a6572483233357a746a35705462574b7457367461736f4369364a3662357a6f4d537165743744682b3678735431335542334a7a574e5a504c35775964427070584a6b507a4c3271584d6e536f68475135326c4c336b59422f7579492b6b6e786e31373930366f67674151454b414d703355564b76662b3978393431666e355a6d3573457547304174774a686e325051454965692b69566c58554f4e546576557a6b364638325552794b64396b6b386a7a66594272786655654565575076497a73584639656270472f6c52653438656e66786865506a68586136754e3265724b3577584b4b63642b6a72784c4561714b74772f7658557233457835664678333261794a487a4d7367725579524b555a73454477684d31345466374d4451336d44616d704d72646274794e534f4939364669504259424c783139686f3175446d63584f7950466b6551536e4e6c4d6b7a6637615131485a51713131637139524f493532633735366e544b53757a73722f2f6e32763266594f39322f61324430384c6f37774244672b53684672664854696257525a6a4450326c4d5868702f77444d484e5159323855554775704866565141516c4b3765633844794174424d677a6330595a374248646542745246363378627647482b4e4a6845796f6a382b4261415278783159374831743147634b597233744f38692b6e5233794a59565932476e4663354542494144385a6f34464144444d67427a76734370774f4148473269686466716972452f637a7a367177737778694774525a3532786743355a5348344b502f33584a546c675531374e4863504e2b4d73664d736565472b723164683475726e6c377a4b3371444e72415841377654746c2f2b6b3376316b316c6d46785452364676354454392f544b4c58747a32484a766d474539627a4f7452627132493577756573543158532f33447a786a715568574f4e43474244696d4564352f327a2f72656d4642634c652b6664596d64676c534c6942625636786538786472753471394366466633476c674c61753270487a525a644c453262385546495234486b6d62657454562b58624d6749454b44346170763739727a7a796d707478393070515a737439667975307a7361793863394172506c6d346379646b637436483637346e5937762f774876756f634f4a335451614735417a714643354954746e414c46522f73365942582b6a4431745350752f4a416335664f59786863464b756b4e65336d464b4b30735777304653306c35596749794d65476f3074596d4a32726f38494f3268463443677538777654614b7733584c306161302f4f78386136347643594d665076317462614f757a592b58472f4468324b6e4d4a43553958574e70575433467875574641475546726d74334833376738586859576d6475336757465362667a4e69384e30467139494a314379444c6f49796d2f47615043424848334b6270717277574a5a2f4d2f4c3975483772716d686678687772434754686f59654878665459586e5871314f6a43697866372b7848674c4e765639696f6f4344362b622f2f374979614d6e335051786b6256766137653876713674617536784d527350786f52635367535a6b6a6d44534a4c3573572b6837485969575251716b5a50745154594851326f62494348655345346e6438503330766b4f425439474734714c516a344f6652755832364c72304936492b74476238347876796e4a784d6a6f646169444f565a6b2f41462f6c757a4177366738574e554270526d7649773164755847727838414735587549436a32414c7449386e4d67596953444e417735452b794f42324b74416a7255543176743534747a4651536775446b4353773335455265324271746f5a3837506d635462515564574974546c6e41596d473435766e6b6335436f437557417255715a3651707877696761776c77325a6636666e6279354e674f4f75666c30784c674969494f4c6f7a70766e4d636b64426c66367662532b2f644876334f787a34434346744447344665474e6435584d4d616a73624a73394a665a39666242333763744c6864645a576a526866686f4a444c43386e54557635726261306579686d4e66453031525a422b2f6461743966664e48484934566562742b386f765279545756534d797a2f33484a37342b353377636e596f6d323975563338724e37584d6a5a734457543830663452504744447651414e6669346f42467839496e2b6176564c747136685758363844514d63327a79554a5531306d2b4f485a2f77576b42417871645555334847705930417a646477756e517249754c51427a48524f3063616571644a4a327a2b4f79646e77472f502f7a4c4d56616a4c644b6b684b55587a324b6f6241533438374d42694e3765626953576c766b58685951664c47534346557753414b61657335743474444a36526e6a362b6b305a6a3237536a70514f63692b75746a33513173395a72307450536d43354e4a746b5833673371746d2f66624131764a482f2f2b2b3832333730547469672b2f71756c62713433526c577148582f596e4c4a3470714250766b53675943754b634d34654e7a41355a443361347848694c6749427864513130365a393833325463646d6e446d396c41693561584f7256555375776c6175372b506d2f4331324e49716d5a4875426575775763794e6675522b4d507066556341483932644547666f483359647a6b425334742f526f4e7641553534326d4a4a786c775561567946394a625352486f47786d6a727838465a774e706f57327852396366706e47484e706f2f457a2f73596a644768477848623852536361686f526e774859666476434e5a6849747861533270594164797a4158376b6b4c6d35644838356576746c776a69397a5a496d4a6e67794c456b462f725943753751684869366372566f6545484b6d4c6a6433717154777a30753543397142384158444a696a53717653614d6e354e696261767179486d486c636e65564f5077426e3379354f6a4b783356577a7638413365755061323366646e5171474656594742686e613639694a4f3171667654716c4a76424e754c74426d76386d636852797367326d4863714c586d6c323731537633334b4d32397635576d51397a59387a364e4864745a705279643365577241365177364a6e724832764477517a305a4275334565315a586433444a793474326f4c535132735238326c4833574f4c74366e627a5845324e6666574f485173696573622b744d6a6236394c5938764c4f7230756c4a5366623235565034314e4757744d4966464866594f6c6356427a59343848396a703952326d6e6f3444793963732b394f585335762b413161594c4f2b54555a30395774564a63574641514e62515677773076762b53326a47714d6c77504570595871674f66616548346539366c36436b524d345a6d4555466f5975516f32306c6a4e57573432576378726a5530437177636f63674b5652626969787445453333495a4e6a55576267505050364968706d496842305a7452714f72455253704b4a792f55424b41304a31706f7a6c444b75697a45477a42725243674b68585357547a63705454316645346956475666686f366c737359616a2b5a633967614f52634e4a726876444b61417477596e337736654e6631317a6c79784b5a4c496e537a4f63454f4648785452766e333467616c487059646b59413350494e6e784853652f644f6b516148484d3235646a6e6d693250487038722f346554767a4a444a6c6a59792b4367726139436c724174446c72377878715937486d3758357a4e6d3954314f6e786b566232466556394b6a35375a30532f4f366b3056465851662b7a37375a62776a4e6d4d546b384636784b576e2b2f706b584c53317148314a4e342b5631705a466f634b4265727567754e466d344a6f6532696646554559374c6965557a766277756654426f6f5079637055537a584b34566f4c616a53672f444c6f2f72382f326b6743366e5a3158586450444e7a6834516b353039634c3851345853416f785432517662674367754c3275482b666d645466746a777a5456787539686c775a39476867536e7266483150582f5777727975584b2b4f6d3634594c4f3177623156432f4a665a6c7061617a664c766b764f452b3731474d2f663230704b553457387450574e747056346e567967712b535a4b3476536b2f73384463447a6f7141366a4a2b7669514d515846364533726e4d4e436a37744938443955614f4e4e4e54464a444475636c694b6b314656754774706a313146512b435634383546734b654a63494d79327546645453494b51752b68707a514c3833507a6b42594b46462b4e784d2f467662444949786d6e512b7134326e4258586749473556656a62387757374545346569696c516f647a687364417343465845477032467a6d71594978514d6c776a683339535134477248514670446635764555346264505231745562656b66544d6c314b2f4f7156736f576e4358587a4c7a6d464a3773562b76552b63474a4d744149376137524d3232415a48486b7a33384d694c504a763546745156726c796e6a426f4f6145525353616e664e7170722b73657476654c6e6e354544427136376438797a64354357327362466658636244476f5a4276766b7178566a524f313072733039645a62734c45573852395853496d5647764d7a624b3965546f364632655a4b6d47625470685a5153574545316d72574e476b706c676c59506f6c61353637783550346147705936396553744332794153582f425056367a323963744d38765338676e4f5a62783675715a484b7762444a49784f2b2b45466956646d5a6a33414563457266547030652f576c4578414658422f76376e327a592b445764672f3842415a63577a356957564b6d706b337839347453593647745859366679317954742f2b757a7557466871597545756c544541344731612b444a6e33526a777255413661474e6c504b7049707865564266566344337a414d3938422f7a5764776a612b64774379627533756b536f68536a4e4f2b527243354a4e2b347841764b73356879534d77374c517a2f465957744e6d68434d4172395845596246484a4e344c576f4e75447976777741345141354630397072536d6273755749302b6d42667a4a6463392f556a3571584164775464467276707138497350684e5358722b48454452374f68376230342b586d4974774b2b586a44657a5944585848324e794e78756930466c5764766d75696b502f5553484d6e414756484f54304d3865506a696d35524f332f50644c333464317a5470686a6d4737397765756d3462793643516f6c5337476b677037574c4e6f4f594c5657344f6b4d4248416a486465676b75456d3838445746503366784763336752774d554e416c327a6f766c374f4f4b4a4f7051736f6e6836664370494b5a354f4a4539344d654466516f4d514d543378586f304d3473564e457635636155656e484d724c363145732f6e46426132656d6d6c5a6f6d6b51696e65627176527330593354796d6d7a47346e4e4b623576545a31735833325377506d5641594b47326b574c596b434335304c6a5979506b306a34386d4e524a776e55537134534a314e3151556355716b326d68444b61713455534d47682b4538506c4c52484b726857754b4a75716338377a784e73564e70363738466d6a5332784974316e35766f7972415a317377615052344d787755463653362b39635a5a2f4d413342517742522f4d4d3137494d63735874614d47594757547942575a7a2b394233516a756469307050364972326f507351765861376f565067414b6c722b52756555387862612f5445592b516f774f4930574c784658554e75547848417855366d7751704c4f4d656c6b794e64623152564f696f327079794f6a2b7537666a326c71754b3672516d666f6a507a6a6f6f374c6f7648584d6553763762344a77424f4c43757130635458416a7967434442384a4b4835394c3176435a446447567a7a525672644e75426f4851386d69716f38534d524170446b454e4c6f75754f32696a574971572b3131524c325a6c6c4d785436335a2b36384258484d67314e4f563458585073774b756a666d6d3465636b415a326e424f2f416e744f325437564e57784875715462354e357a5546754265784a464d2f35377a4971527351454d58436565594e304c2b7444384a657035736d674433504b58356248755a415064733876702f4d6473454f4f4f703051513434386e65614a524e67444f613645332f67476f38305a736f763477534d4557346c314872706a4d625451496d77426c4e394362434c364d4554494237476256754f7250524a4741436e4e464562794c384d6b7241424c69585565756d4d78744e41696241475533304a7349766f77524d6748735a745734367339456b59414b6330555276497677795375422f416339536772574f365271744141414141456c46546b5375516d4343";

async function main() {
let a = await canvas.getCanvasData(hex);
console.log(a)
}
main()