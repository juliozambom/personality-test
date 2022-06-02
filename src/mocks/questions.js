const questions = [
    {
        question: "Qual país você prefere?",
        images: [
            "https://www.estudopratico.com.br/wp-content/uploads/2016/10/bandeira-canada.jpg",
            "http://geo5.net/imagens/bandeira-da-nova-zelandia-2000px.png",
            "https://media.istockphoto.com/vectors/switzerland-flag-vector-graphic-rectangle-swiss-flag-illustration-vector-id1221518229?k=20&m=1221518229&s=612x612&w=0&h=fvrxo9QgZ4cNonUswU7we7cqu-W6ZSGJztjObrDnorE=",
            "https://www.estudopratico.com.br/wp-content/uploads/2017/02/bandeira-espanha-p.jpg"
        ],
        subtitles: ["Canadá", "Nova Zelândia", "Suiça", "Espanha"],
        carine: "Nova Zelândia",
        pedro: "Suiça",
        catherine: "Suiça",
        giovanna: "Espanha",
        stephany: "Suiça"
    },
    {
        question: "Dentre os personagens abaixo, qual você prefere?",
        images: [
            "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg?region=64,0,712,400",
            "https://uploads.jovemnerd.com.br/wp-content/uploads/2019/03/capita-marvel-vs-thanos.jpg",
            "https://colunaboraviajar.com.br/wp-content/uploads/2021/07/loki-5.jpg",
            "https://criticalhits.com.br/wp-content/uploads/2022/05/wanda-feiticeira-escarlate-01.jpg"
        ],
        subtitles: ["Homem de Ferro", "Capitã Marvel", "Loki", "Wanda"],
        carine: "Homem de Ferro",
        pedro: "Wanda",
        catherine: "Loki",
        giovanna: "Loki",
        stephany: "Homem de Ferro"
    },
    {
        question: "Quando algo foge do esperado, você normalmente...",
        images: [
            "https://cdn.culturagenial.com/imagens/raiva-0-cke.jpg?auto_optimize=low",
            "https://cdn.culturagenial.com/imagens/disney-infinity-30-tristeza-sadness-divertida-mente-d-nq-np-857825-mlb25625785219-052017-f-cke.jpg",
            "http://3.bp.blogspot.com/-WB-iVCaRnck/VYyXy3XRanI/AAAAAAAAQZQ/bcptroFy2QY/s1600/Divertida%2BMente%2B05.jpg",
            "https://i1.wp.com/segredosdeconcurso.com.br/wp-content/uploads/2015/08/medo-concurso.jpg"
        ],
        subtitles: ["Fica com raiva", "Se sente triste", "Fica calmo", "Se sente ansioso"],
        carine: "Se sente ansioso",
        pedro: "Fica com raiva",
        catherine: "Fica com raiva",
        giovanna: "Se sente ansioso",
        stephany: "Se sente ansioso"
    },
    {
        question: "Qual área do conhecimento você mais se identifica?",
        images: [
            "https://blog.institutosingularidades.edu.br/wp-content/uploads/2020/10/Cie%CC%82ncias-Humanas-na-BNCC-%E2%80%93-desafios-do-1o-ao-5o-ano.jpeg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNu1n9stuuzCHiVjKctGfytYAiVvr-b7-jIOVlee8UwQqF5Hq3gnfbLk01T9Dzh7fGoso&usqp=CAU",
            "https://voaed.com/wp-content/uploads/2019/08/linguagens_texto_imagens_codigos_gestos_e_simbolos_02.jpg",
            "https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/12/preservacao-ambiental.jpg"
        ],
        subtitles: ["Ciências Humanas", "Exatas", "Linguagens", "Biológicas"],
        carine: "Exatas",
        pedro: "Biológicas",
        catherine: "Exatas",
        giovanna: "Exatas",
        stephany: "Linguagens"
    },
    {
        question: "Você se considera uma pessoa:",
        images: [
            "https://exame.com/wp-content/uploads/2012/09/extroversao.jpg",
            "http://c.files.bbci.co.uk/EE92/production/_101847016_asiatica.jpg",
            "https://www.infoescola.com/wp-content/uploads/2008/04/transtorno-de-personalidade_1025292151.jpg",
            "https://www.lifetransitions.com.br/wp-content/uploads/2020/06/post-lifetransitions-nao-sei-fazer-nada.jpg"
        ],
        subtitles: ["Extrovertida", "Introvertida", "Ambivertida", "Não sei"],
        carine: "Ambivertida",
        pedro: "Ambivertida",
        catherine: "Ambivertida",
        giovanna: "Ambivertida",
        stephany: "Ambivertida"
    },
    {
        question: "O que você menos gosta nas pessoas:",
        images: [
            "https://reporternordeste.com.br/wp-content/uploads/2017/05/falsidade-2-696x394.png",
            "https://www.jornaldafranca.com.br/wp-content/uploads/2021/07/grosseria-no-trabalho.jpg",
            "https://i0.wp.com/www.updateordie.com/wp-content/uploads/2018/05/blindfold-critique-joshua-david-lynch.jpg?resize=1200%2C736",
            "https://thumbs.dreamstime.com/b/conceito-do-egoismo-e-da-personalidade-narcis%C3%ADstica-112976610.jpg"
        ],
        subtitles: ["Falsidade", "Grosseria", "Ignorância", "Egoísmo"],
        carine: "Ignorância",
        pedro: "Grosseria",
        catherine: "Grosseria",
        giovanna: "Falsidade",
        stephany: "Falsidade"
    },
    {
        question: "Você se considera uma pessoa:",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7h1GFOrVQsGa_uEXFGwQS66AiIhNTw8ulLFgsVInpII0bjGewLeLSm-aynV1yTTzj-yo&usqp=CAU",
            "https://poacomacento.com/wp-content/uploads/2019/02/ser-alegre-300x170.jpg",
            "https://static.quizur.com/i/b/581e31d684f943.21885057aaaa.jpg",
            "https://64.media.tumblr.com/tumblr_lia6u9RWPO1qdadnso1_500.jpg"
        ],
        subtitles: ["Tímida", "Alegre", "Amigável", "Seca"],
        carine: "Seca",
        pedro: "Tímida",
        catherine: "Amigável",
        giovanna: "Amigável",
        stephany: "Tímida"
    },
    {
        question: "Qual seu animal preferido dentre esses?",
        images: [
            "https://cdn.folhape.com.br/upload/dn_arquivo/2022/04/pexels-brigitte-pellerin-5108126edt.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGy0GN768wCH4AC4QpVeHOmFyLDb4AoBGDA&usqp=CAU",
            "https://www.petz.com.br/blog/wp-content/uploads/2021/01/hamster-pode-comer-tomate.jpg",
            "https://s2.glbimg.com/3zSwnupWZlybL04w8xE4ujvX6tY=/e.glbimg.com/og/ed/f/original/2022/02/22/coelho-tudo-que-voce-precisa-saber-antes-de-adotar-um-vida-de-bicho.png"
        ],
        subtitles: ["Cachorro", "Gato", "Hâmster", "Coelho"],
        carine: "Gato",
        pedro: "Cachorro",
        catherine: "Cachorro",
        giovanna: "Cachorro",
        stephany: "Cachorro"
    },
    {
        question: "O que é mais importante para você?",
        images: [
            "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/12/08/357983771-dia-nacional-da-familia-tenha-paz-com-ajuda-dos-signos-e-rituais-18663.jpg",
            "https://sbnped.com.br/images/amigos.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyCtrNg7VEhaojd640Xm8ZaWkRHAl1n3sJNNcQOzxo_uiInqEBcEYEmmZtnVeOtfkaKY&usqp=CAU",
            "https://www.awebic.com/wp-content/uploads/2022/03/IMAGEM-DO-AWEBIC-2022-03-03T195940.651-1.jpg"

        ],
        subtitles: ["Família", "Amigos", "Pets", "Amor"],
        carine: "Pets",
        pedro: "Amigos",
        catherine: "Família",
        giovanna: "Família",
        stephany: "Família"
    },
    {
        question: "Qual sua cor preferida?",
        images: [
            "https://cdn3.ecshop.com.br/mgno9rbpq/product_images/h/169/pp1304__63903.png",
            "https://img.kalunga.com.br/fotosdeprodutos/479736z_1.jpg",
            "https://varotti.vteximg.com.br/arquivos/ids/172906-1000-1000/36562_MDF-Vermelho-Scarlate-Lacca-AD-Eucatex_6mm.jpg?v=637152138083630000",
            "https://www.decortiles.com/upload/produtos/decortiles-puro-15-preto-pol-80x160cm.jpg"
        ],
        subtitles: ["Azul", "Amarelo", "Vermelho", "Preto"],
        carine: "Amarelo",
        pedro: "Preto",
        catherine: "Vermelho",
        giovanna: "Amarelo",
        stephany: "Amarelo"
    },
    {
        question: "Qual sua estação do ano preferida?",
        images: [
            "https://static.mundoeducacao.uol.com.br/mundoeducacao/2019/08/primavera.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_XMp7C6eRy1IDxQZL4WPjgF9LuRFwYbyhg&usqp=CAU",
            "https://olhardigital.com.br/wp-content/uploads/2022/03/shutterstock_outono-2022.jpg",
            "https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/inverno-datas-e-caracteristicas-1024x576.jpg"
        ],
        subtitles: ["Primavera", "Verão", "Outono", "Inverno"],
        carine: "Primavera",
        pedro: "Outono",
        catherine: "Inverno",
        giovanna: "Verão",
        stephany: "Outono"
    },
    {
        question: "Qual tipo de comida você prefere?",
        images: [
            "http://cdn.cnn.com/cnnnext/dam/assets/170131184355-gbs-bento-box.jpg",
            "https://i2.wp.com/files.agro20.com.br/uploads/2020/03/comidabrasileira3.jpg?fit=1024%2C585&ssl=1",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLZ6plBAiyFV2ND0pXKv3gkGoI__7wCnq6BuYnvHU-bBkRXWagjXP0G-SwoIHKSqxuno&usqp=CAU",
            "https://i1.wp.com/contraeverso.com.br/wp-content/uploads/2016/11/Comida-Arabe-3.jpg"
        ],
        subtitles: ["Japonesa", "Brasileira", "Italiana", "Árabe"],
        carine: "Brasileira",
        pedro: "Italiana",
        catherine: "Brasileira",
        giovanna: "Brasileira",
        stephany: "Italiana"
    },
    {
        question: "Como você prefere chamar o pão?",
        images: [
            "https://s2.glbimg.com/-V4nFrbjz9JMuWJnvQxl2NEplg8=/0x0:1280x922/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/U/q/B5doHYQcKDxm0YsOynPA/pao-frances.jpeg",
            "https://www.nidelins.com.br/wp-content/uploads/2019/08/dia-16-foto1.jpg",
            "https://www.mdsaude.com/wp-content/uploads/sal-imagem2.jpg",
            "http://3.bp.blogspot.com/_3ckuLHFlY_w/TCd4N-nCBEI/AAAAAAAAAq0/P58n1dIAYC8/s1600/IMG_6311b.jpg"
        ],
        subtitles: ["Pão francês", "Cacetinho", "Pão de sal", "Careca"],
        carine: "Pão francês",
        pedro: "Cacetinho",
        catherine: "Pão francês",
        giovanna: "Pão francês",
        stephany: "Pão francês"
    },
    {
        question: "Qual seu jogo preferido?",
        images: [
            "https://play-lh.googleusercontent.com/O1PZp04AoxddQSPDs-2Ci5ZLMXZZw4TMgNiGjh9wpW8SSbBdQ9wiGIfhStR8YZEBBk96",
            "https://xboxplay.games/uploadStream/17634.jpg",
            "https://blog.2amgaming.com/wp-content/uploads/2020/08/valorant.jpg",
            "https://cdn2.unrealengine.com/new-major-among-us-update-featuring-new-roles-and-cosmicubes-1920x1080-c21d5af49651.jpg"
        ],
        subtitles: ["Gartic", "Minecraft", "Valorant", "Among Us"],
        carine: "Valorant",
        pedro: "Minecraft",
        catherine: "Gartic",
        giovanna: "Minecraft",
        stephany: "Gartic"
    },
    {
        question: "Qual seu jogo preferido?",
        images: [
            "https://play-lh.googleusercontent.com/O1PZp04AoxddQSPDs-2Ci5ZLMXZZw4TMgNiGjh9wpW8SSbBdQ9wiGIfhStR8YZEBBk96",
            "https://xboxplay.games/uploadStream/17634.jpg",
            "https://blog.2amgaming.com/wp-content/uploads/2020/08/valorant.jpg",
            "https://cdn2.unrealengine.com/new-major-among-us-update-featuring-new-roles-and-cosmicubes-1920x1080-c21d5af49651.jpg"
        ],
        subtitles: ["Gartic", "Minecraft", "Valorant", "Among Us"],
        carine: "Valorant",
        pedro: "Minecraft",
        catherine: "Gartic",
        giovanna: "Minecraft",
        stephany: "Gartic"
    }
]

export default questions;