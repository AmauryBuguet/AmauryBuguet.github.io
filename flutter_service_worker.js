'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c44ef715d47bbf95812ed047d5c93169",
"assets/assets/Sprite/12%2520clefs%2520lite.png": "16cba46def52bffd7ca714406447c75d",
"assets/assets/Sprite/12%2520clefs.png": "d440dc59fb7d243fe5751a969a151f1f",
"assets/assets/Sprite/12%2520keys.png": "5db1ddb091b46a62f41e20baa4459acb",
"assets/assets/Sprite/1x1.png": "c0187dbe840f426cf217ee55e04e0323",
"assets/assets/Sprite/actions_blue.png": "4047a6e8ffebe1a9f3e43c922957071f",
"assets/assets/Sprite/actions_grey.png": "200d6c582e0d2d9da26a35b939b725cb",
"assets/assets/Sprite/agenda.png": "e15a8b40ddc66332697162e476ddc8d4",
"assets/assets/Sprite/appbar.power.png": "ab0022b3a86f118cf236b06a2a94a399",
"assets/assets/Sprite/archive@2x%25201.png": "54411269ffcd22ac95fb26b7375496c9",
"assets/assets/Sprite/back.png": "35dd6c58b1f7bbf68ac4031daab1eed9",
"assets/assets/Sprite/Background.png": "2fb672207c7c33fe2e8d2f3ebcf08585",
"assets/assets/Sprite/back_arrow.png": "0b7bba2bfe9e1292a05b8cc31b5334c5",
"assets/assets/Sprite/back_popup_achat_societe.png": "f9e25aceac9935ff3dadd9beb6eab135",
"assets/assets/Sprite/back_popup_actions.png": "a8df7699dd82ae0d1e1b406e73345f0e",
"assets/assets/Sprite/back_popup_emprunter.png": "624d5072293532ee582b2b8a4058d51a",
"assets/assets/Sprite/back_popup_vendre_dividion.png": "a77a54f2cc50bf57b677a7051f624b12",
"assets/assets/Sprite/back_white_transparent_play.png": "bec8dab8a617c874e7087244eca13b0b",
"assets/assets/Sprite/bank.png": "2396cbffe676ffec37dd852fb4895141",
"assets/assets/Sprite/bloc_12_keys.png": "a848ec5c9662a2ec5da130d135ba9de2",
"assets/assets/Sprite/blue_gradient_back%2520%25231126.png": "53ebf6f3e377eed76ac2039277b6e629",
"assets/assets/Sprite/blue_gradient_back%2520%25231130.png": "927f0cc35ffd0f2546a33055092229ac",
"assets/assets/Sprite/blue_gradient_back.png": "3b2f65ca26ce258fce8aee2790cf7481",
"assets/assets/Sprite/blue_gradient_back@2x.png": "bf760f892609da3471093eaf1b9fc783",
"assets/assets/Sprite/blue_line.png": "6600368c953af783eee8794e97f2766f",
"assets/assets/Sprite/books_lights_illustration.png": "4f65dbf3e2f2299e92df710b98f6c890",
"assets/assets/Sprite/bulle.png": "c7d8e5d13a1bc9d4927a226520df5696",
"assets/assets/Sprite/buton_market.png": "0639ee067b9f89c2ea3773f59a0bd3a2",
"assets/assets/Sprite/button%2520croissance%2520externe.png": "eef34d1dfc2c224aa64315d45a8786fe",
"assets/assets/Sprite/button%2520emettre%2520actions.png": "00e53953631d2d2b5e8cb1b8f75a6317",
"assets/assets/Sprite/button%2520emprunter.png": "ad130272d223999a48c2622be8251626",
"assets/assets/Sprite/button%2520table.png": "f356c8a1460aeb7b5d788b95e24ebf5f",
"assets/assets/Sprite/button.png": "5adaeadd7a511ad4f4efa6bd951e295e",
"assets/assets/Sprite/button_12_keys.png": "e02a20089607e1a9bdaebb7be838d5d9",
"assets/assets/Sprite/button_about%2520%25231163.png": "83d9ae7b370d72bef212250b571954dc",
"assets/assets/Sprite/button_about.png": "7abd655fa6e1b78092f80949d095519f",
"assets/assets/Sprite/button_add.png": "f254e4348dad7c78b0666797d2356b1e",
"assets/assets/Sprite/button_a_propos.png": "2362e2a87d9703397b64e2521fa67e6d",
"assets/assets/Sprite/button_board.png": "521c008164bbe715ab142cf6b6cf64f9",
"assets/assets/Sprite/button_close-1.png": "42e13b6945964605bc45ece06ade1bd1",
"assets/assets/Sprite/button_computer.png": "6d755c41273e8958efce0e68d5803f3d",
"assets/assets/Sprite/button_continue%2520%25231032.png": "1f0ee871b71a6779f076586a8be76aa5",
"assets/assets/Sprite/button_continue.png": "1f0ee871b71a6779f076586a8be76aa5",
"assets/assets/Sprite/button_display_boards.png": "4df5c79298bd030aaa172b885d32d6fc",
"assets/assets/Sprite/button_display_limits.png": "8ced5c361d5829bfe700fe19516a882d",
"assets/assets/Sprite/button_edit_profile.png": "03429385fdf9ccf232ed8d851bf102bc",
"assets/assets/Sprite/button_eye.png": "03c77753b55139a1ea2222c8dc5e58b3",
"assets/assets/Sprite/button_glossary.png": "fafe4f5b500466d45a1b2a395ad7d24a",
"assets/assets/Sprite/button_help.png": "fb7f079adfa2795d401a1eff1bd187de",
"assets/assets/Sprite/button_keys.png": "5cddf537c4c852c02f22531f51eb4b25",
"assets/assets/Sprite/button_money_coins_off.png": "87ce456841891068b9feb7deb5956d00",
"assets/assets/Sprite/button_new_game@2x.png": "cfffc138f810e6ab17b3a065c6a6761a",
"assets/assets/Sprite/button_no.png": "f5a82edbf9671a8aa11e0e0f6e7e1dad",
"assets/assets/Sprite/button_non.png": "54ab6784b850589d36620eaa1e8b19c7",
"assets/assets/Sprite/button_off%2520%25231145.png": "7c56b4db2a479c6e987f62dee0237e1c",
"assets/assets/Sprite/Button_Off.png": "bd9771230a980878cfc5f992cceb9034",
"assets/assets/Sprite/button_on%2520%2523964.png": "73954b0d45bcfab36bf7341f8d71fc84",
"assets/assets/Sprite/Button_On.png": "9642cb54b2d40b5d0f940e1ff33f4e9d",
"assets/assets/Sprite/button_oui.png": "678660bb77b606941f08d523de1ec31a",
"assets/assets/Sprite/button_parameters.png": "4cdc2f770cc5df3b709c214adbf91d4e",
"assets/assets/Sprite/button_play%2520%2523986.png": "2d54002e90acef62d0dfdc23d5e3a04d",
"assets/assets/Sprite/button_play.png": "03429385fdf9ccf232ed8d851bf102bc",
"assets/assets/Sprite/button_play@2x%2520(1).png": "c35ccdb5f28a6b88810792f5095d721f",
"assets/assets/Sprite/button_profil.png": "450c5446a1dcf2a3de22f423a5a85583",
"assets/assets/Sprite/button_profile.png": "695ef0505b92f7bef1190fafd268fcd5",
"assets/assets/Sprite/button_reinvestir.png": "2362e2a87d9703397b64e2521fa67e6d",
"assets/assets/Sprite/button_round.png": "763af576be585f03732e7a6ebf51af6f",
"assets/assets/Sprite/button_rule.png": "8b2065d792e66ccd1ab0f14a4d26b90d",
"assets/assets/Sprite/button_Skip_next.png": "1e364c34428c526424d10edcfead68db",
"assets/assets/Sprite/button_Skip_previous.png": "f9d44ff0cff246fa67171ff70b5a4f50",
"assets/assets/Sprite/button_team.png": "54d060cb615d4b401f68f0d3bbd6eeb5",
"assets/assets/Sprite/button_tuto.png": "7ffc357eb4646b48473f5286bf28b668",
"assets/assets/Sprite/button_user.png": "a7b104ebce5c1be351069cad0d20c883",
"assets/assets/Sprite/button_yellow_square_title.png": "c14cf36994e1c7ddce9f1453eb5082e7",
"assets/assets/Sprite/button_yes%2520%25231042.png": "038e742c8a8c94a468c963a7ab60a7b1",
"assets/assets/Sprite/button_yes.png": "038e742c8a8c94a468c963a7ab60a7b1",
"assets/assets/Sprite/calculatrice.png": "2a326af88cc75a1d64232c8c349dc1cc",
"assets/assets/Sprite/Checkmark.png": "59270bd4fe37bdb1f79c1c4f1b560984",
"assets/assets/Sprite/check_empty.png": "452124591a35103bfb3275fe1280b5fe",
"assets/assets/Sprite/check_full.png": "d1ef6bbb5333edf8622c7b4f00dba2ae",
"assets/assets/Sprite/circle_white.png": "df8b2d1b94d3336c886e6c4cdfb98504",
"assets/assets/Sprite/circular-arrow-clock.png": "ae2a085f1136f4d46c2f9f0915f24e4e",
"assets/assets/Sprite/classement_blue.png": "b61d4aec12a127870a0bc28796857de0",
"assets/assets/Sprite/classement_grey.png": "86d6d8c0adf811ab2adbae4bb6a6d1a7",
"assets/assets/Sprite/close.png": "3d6712a59485f2b7ee67820581f531e9",
"assets/assets/Sprite/close@3x.png": "6dbc346af34ce8abdbe7070c3dfc7272",
"assets/assets/Sprite/conseil_blue.png": "83166e382f87ccae7c81d94f2f89a472",
"assets/assets/Sprite/conseil_grey.png": "ba31321598dafa025b3ddcbd58087fe1",
"assets/assets/Sprite/cours_online.png": "0cd4a640b37756f0556aefff9e5a0f8a",
"assets/assets/Sprite/croissance_blue.png": "1e37304381b1782e8ed552edc2b67e88",
"assets/assets/Sprite/croissance_grey.png": "9f93aa85398b56e431eee5cb39cc8029",
"assets/assets/Sprite/cross.png": "43c63ad75bc6df1dccdb01088b4736ce",
"assets/assets/Sprite/definition.png": "aa6026082dbc0b242380acbc5df5fb5c",
"assets/assets/Sprite/definition_big_grey.png": "6e6ee17bbbde293b6c735434abbbea98",
"assets/assets/Sprite/Division_Add_Button.png": "8d044ed80ffc254ba380a7d8c95bfc6b",
"assets/assets/Sprite/Division_Button.png": "7ca8bc9b32c4688c0df068adbf4b5424",
"assets/assets/Sprite/DropdownArrow.png": "f1b6a01bd8938e9b4550abe414112cde",
"assets/assets/Sprite/emprunt_blue.png": "f5b49d6cb33340e125065ad5578d5cbe",
"assets/assets/Sprite/emprunt_grey.png": "3f64f15508bada91a6309074644b87a8",
"assets/assets/Sprite/entreprise@2x.png": "4cc1f016c5912ed7269e530907dc425d",
"assets/assets/Sprite/femme2_main_milieu@2x.png": "fc2ae3c517150c45a93b6a6650b5f213",
"assets/assets/Sprite/femme_coude@2x.png": "58f85e22e7f30dca58eb9e59bfc0683c",
"assets/assets/Sprite/femme_main_bas@2x.png": "5464d6c2045d59ecc413ac6d3c18c88b",
"assets/assets/Sprite/femme_main_en_lair@2x.png": "11a56e22894427376712b398b9ad13d9",
"assets/assets/Sprite/femme_main_haut@2x.png": "4d35a9997368e2e0865b7dd07240c7ef",
"assets/assets/Sprite/femme_main_milieu@2x.png": "992c1b1e55bcf0727bbbdfb53a0d8c0a",
"assets/assets/Sprite/field_yes_no.png": "25aa5fc146bb1ceb44e6a046c348035c",
"assets/assets/Sprite/folder.png": "d9e07970c3d55e0204caeb621fbd447a",
"assets/assets/Sprite/fond_noir.png": "8516b7f1557723898b31d20eebbe2224",
"assets/assets/Sprite/garbage_white.png": "fb2bd7a47cede3efd3b2f6128b22ef9b",
"assets/assets/Sprite/gradient_blue_back%2520%25231086.png": "8c21a5655cb357b758bd2f97d0f4db8e",
"assets/assets/Sprite/gradient_blue_back.png": "b14a76ab861b7bc57e1bd15b20e1e251",
"assets/assets/Sprite/graphique_blue.png": "e8d31161320d2de9321919cfa44339a7",
"assets/assets/Sprite/graphique_grey.png": "b858ececb3342d1fb929b77724450874",
"assets/assets/Sprite/Groupe%25203969.png": "186f72b731caa180f11c40489e784e50",
"assets/assets/Sprite/Groupe%25203969@2x.png": "66f6fee63fe4fd5ec08cb8dacfa387e7",
"assets/assets/Sprite/Groupe%25204058.png": "05dff4c02a8203d2f1eb1a437c626842",
"assets/assets/Sprite/help_illustration.png": "0428231cd59fb49309e549b5696ebfeb",
"assets/assets/Sprite/home.png": "f0224ede144b295543a212741c3af7ef",
"assets/assets/Sprite/icon%2520Settings.png": "abfad64ce71c971c1b012bbdaec69b93",
"assets/assets/Sprite/icon-team.png": "9fb133adf4e442a2beac6f2dd57791a7",
"assets/assets/Sprite/icon_actions.png": "cb117863a5b76d24a1de0f0dd5b2b50b",
"assets/assets/Sprite/icon_boss.png": "a84b6eba0b91e2b070f2ddf1e89cf762",
"assets/assets/Sprite/icon_circle_off.png": "82fa902f560a7b27202d1320932b2d33",
"assets/assets/Sprite/icon_circle_on.png": "64b4837c1dc5b610cd42b0c2d35a706e",
"assets/assets/Sprite/icon_identifiant@2x.png": "752e2187681f4f69fc54c5f9ead13c88",
"assets/assets/Sprite/icon_Mail%2520%25231085.png": "92e1d355a9f0fa0cced7033e9deeca70",
"assets/assets/Sprite/icon_Mail.png": "92e1d355a9f0fa0cced7033e9deeca70",
"assets/assets/Sprite/icon_market.png": "92b2f945bcc09ff5093b7bc1467e47f9",
"assets/assets/Sprite/icon_password.png": "596bfe6000148bdde3efa2497a952d4b",
"assets/assets/Sprite/icon_pie-chart.png": "ca2b75b1a35c2f3776035d8ba33d95b1",
"assets/assets/Sprite/icon_quotes.png": "5b4457966940d078a24bab95c930071d",
"assets/assets/Sprite/icon_wallet.png": "7575a9a29dbc7be34be1c469a31a9fe4",
"assets/assets/Sprite/illustration%25202.png": "be8e6872c5c5d185da17b700f82d85aa",
"assets/assets/Sprite/illustration.png": "7b93ee7b039d7a9841c09ae3bfb27832",
"assets/assets/Sprite/InputFieldBackground.png": "6407e16c4ab7de8a6eb9e55c661bd51e",
"assets/assets/Sprite/keys_illustration.png": "9cc78024b6826d216ca52e6db19d6812",
"assets/assets/Sprite/Knob.png": "ab30f6a66645440dc847b813a4324cff",
"assets/assets/Sprite/Ligne%2520-1@2x.png": "5f2294b718f10ed5cac64d1b479d0de0",
"assets/assets/Sprite/Ligne%252079@2x.png": "ed7ee21b0dee7a93704b0b2c25a70fd1",
"assets/assets/Sprite/line-1.png": "23f375aa9c53386e79f8c43c91d20cfa",
"assets/assets/Sprite/line.png": "604acaca9ce1e8f2acb0af573cc0441a",
"assets/assets/Sprite/LineSeriesPoint.png": "10d387cb1ded6e3814c31312b1c466fc",
"assets/assets/Sprite/LineSeriesPointTriangle.png": "8670f971efbd0f1aac3e69b89bbdd466",
"assets/assets/Sprite/Logo%2520Strathena.png": "65b47a8c9e3f3403b8d7f29f65468c08",
"assets/assets/Sprite/Logo%2520Strathena@2x.png": "9c54c39ea38af825c7b2074dd034e3e0",
"assets/assets/Sprite/Logointeractive4dSeriousgameslabsblanc%2520(1).png": "bfe3754611862a9372d2a2a47d0504bc",
"assets/assets/Sprite/logo_i4D_transp-128.png": "19a2238c53292c469e983930231a9c12",
"assets/assets/Sprite/logo_i4D_transp.png": "50e75cdc311744d8f3c5d3f03fe40bb3",
"assets/assets/Sprite/logo_interactive4D%2520petit.png": "6fa6bfdad9a068d7bb1cfba587b1bbb8",
"assets/assets/Sprite/logo_strathena.png": "a465a4dbd73b4b5c813c98afc04ef712",
"assets/assets/Sprite/logo_strathena_gris.png": "a454ef1cd8291f10b36c8f1509ccf6ac",
"assets/assets/Sprite/mail@2x.png": "b90b091092a97944327090356dea8caa",
"assets/assets/Sprite/man_illustration.png": "59707ee096f00969c7e0375a54491383",
"assets/assets/Sprite/marche_blue.png": "13662ab09039c038273276d1485e46b4",
"assets/assets/Sprite/marche_grey.png": "c9e0c60cbaa5fe7008a9838fa36077c5",
"assets/assets/Sprite/modify@2x.png": "5a8472a31511e62f683200c59c9da336",
"assets/assets/Sprite/moins.png": "9dde792673c906d4c1505b5231066a0f",
"assets/assets/Sprite/monojoueur_blanc.png": "ba864bf5eb60d3dcd1da86e87d0fdc19",
"assets/assets/Sprite/monojoueur_gris.png": "e1cfb596e62127596d4d325384a5664a",
"assets/assets/Sprite/mot_passe@2x.png": "949a108ab4dda5213429fc0c7a27d445",
"assets/assets/Sprite/multijoueur_blanc.png": "023bac0162590a5418dee1c1e0b72f53",
"assets/assets/Sprite/multijoueur_gris.png": "4c0e014d4f89ad1c0978b3075a8ce89b",
"assets/assets/Sprite/next.png": "bf767ebc0e50ccbaae4f355e24b54600",
"assets/assets/Sprite/next_button@2x.png": "e606d1df77220183e1a75928f185fffc",
"assets/assets/Sprite/nom@2x.png": "e5b6e760f8bfc2dea9833f17ab5922c9",
"assets/assets/Sprite/Notebook.png": "e646098dbe6d1529136262b22a54b7e0",
"assets/assets/Sprite/Panel_Graphic.png": "a64a8c207b708ad8bb8f6a812c9dea0b",
"assets/assets/Sprite/passage-of-time_blanc.png": "3657a4a49a20011b1ab3190084f155bf",
"assets/assets/Sprite/passage-of-time_bleu.png": "4b7667a19156894bd2704d9db7d9fb2e",
"assets/assets/Sprite/Pen%25201.png": "b2d1dd81693d580a55844c3e766fb9ff",
"assets/assets/Sprite/Pen%25202.png": "acb0756dc73a77b9bc89dd05c12a542a",
"assets/assets/Sprite/Pencil%25201.png": "b3bc03e4ab77fd4e3aa46c63e8aa0ddb",
"assets/assets/Sprite/Pencil%25202.png": "9ccb161fc76d50e8a806aa5d9ef9dcaa",
"assets/assets/Sprite/plus.png": "f493e9bf0053236380b91161d0ee46b3",
"assets/assets/Sprite/popup_ok.png": "a10fb07471637dbcc38ffa693da7a57c",
"assets/assets/Sprite/popup_regle.png": "f0de4b23620f16b0c410983437c8a31e",
"assets/assets/Sprite/previous_button@2x.png": "ddc707c03056b7de2590e4214ceaae13",
"assets/assets/Sprite/Rectangle%25202513.png": "7e58752e7accf0ff310854dc7e3d624f",
"assets/assets/Sprite/Rectangle%25202515.png": "3365395507f28d023dd57d6daeeac6f6",
"assets/assets/Sprite/refresh-button.png": "2c933f22ced1a875be6b9fbf4fb5cb3a",
"assets/assets/Sprite/reload_46x46.png": "2912d648170fd582a33db85c419de377",
"assets/assets/Sprite/robot-head-white.png": "fe41afd515625bb8982a7eb6323251b2",
"assets/assets/Sprite/robot-head.png": "074cb089736b9ec6e047a322cbbd0d8e",
"assets/assets/Sprite/saisons.png": "825657a5865d4234b0b6c921d1e8ef5e",
"assets/assets/Sprite/settings-work-tool.png": "7902157b1a5d1e1a2746f0305bb1a5ad",
"assets/assets/Sprite/show_off.png": "a9746c0e9f3b164a61e0ac666ecb0812",
"assets/assets/Sprite/show_on.png": "36efdb586c0855c348a89a300cd6f516",
"assets/assets/Sprite/show_on@2x.png": "846938571e71dcefb90a9426e8cf02b2",
"assets/assets/Sprite/society_illustration%25201.png": "5044b5c4ead3b2a498591c244647b0a1",
"assets/assets/Sprite/speaker-on.png": "2130ea44a43c071755132a17bbc90063",
"assets/assets/Sprite/speaker_off.png": "eecdaded0f2d31280e655af7068a5ec5",
"assets/assets/Sprite/stats1_illustration.png": "3782ee58cde371949ff9a04f27aae28e",
"assets/assets/Sprite/stats2_illustration.png": "63d6ff664ca9b8d101854fcb47f25972",
"assets/assets/Sprite/Strathena-infographie%2520(visuel%2520seul).png": "9a34be493a0609dbf87bcdddcfa98124",
"assets/assets/Sprite/team_illustration.png": "a7d3a25c9169bbfeb630f8ae6b7512d1",
"assets/assets/Sprite/telephone.png": "72e6ef2afc40ccab4c9d02226111d26a",
"assets/assets/Sprite/triangle_bulle.png": "7a04342dec51688793c5da70794ab365",
"assets/assets/Sprite/tuto%2520conseil%25202.png": "4e2f489cc455794df9d3a7b4f2cbe526",
"assets/assets/Sprite/UIMask.png": "2bc670247ac7c2dec1c50a23917bbb1e",
"assets/assets/Sprite/UISprite.png": "2c2de6ae9fb374198cbf228ccac3f3fe",
"assets/assets/Sprite/Union%252052@2x.png": "bd0f4209da2a8c5d24af9efc87dcef80",
"assets/assets/Sprite/UnitySplash-cube.png": "ff942199932f8c0aac8ff95b5bedd853",
"assets/assets/Sprite/Validate_Button.png": "e4c765028cf0bd6f04069443cf48b41c",
"assets/assets/Sprite/WhiteSquare128.png": "9badd45e54bd696a7c721a0c8c17490e",
"assets/assets/Sprite/white_back%2520%25231050.png": "37bb8b46fd0444b21976aea88c7fdcf7",
"assets/assets/Sprite/white_back%2520%25231096.png": "b57a8cb913ab48cd531f30c35c59b75b",
"assets/assets/Sprite/white_back%2520%25231139.png": "293d1cc8efa37f1dde0d69eced78042c",
"assets/assets/Sprite/white_back%2520%25231140.png": "b57a8cb913ab48cd531f30c35c59b75b",
"assets/assets/Sprite/white_back%2520%25231156.png": "b57a8cb913ab48cd531f30c35c59b75b",
"assets/assets/Sprite/white_back%2520%2523997.png": "293d1cc8efa37f1dde0d69eced78042c",
"assets/assets/Sprite/white_back.png": "b57a8cb913ab48cd531f30c35c59b75b",
"assets/assets/Sprite/white_back@3x.png": "9baac17883582f4f949b289a8d49a6bd",
"assets/assets/Sprite/white_back_display_boards%25202.png": "cb048b0c1548ed1d8676de7f4ea690e5",
"assets/assets/Sprite/white_transparent_back%2520%2523963.png": "1fdb769103d970d13b2f9c98bab43312",
"assets/assets/Sprite/white_transparent_back.png": "1fdb769103d970d13b2f9c98bab43312",
"assets/assets/Sprite/WMG_Link2.png": "38c94a37a327f1ad91c1e91933a3844c",
"assets/assets/Sprite/WMG_Link_Dotted.png": "e96af8a0f028d925ab7a04ce82fb7ffa",
"assets/assets/Sprite/Wood-seamless-1.png": "cbb7e25eded95189c14088d8f99c29a4",
"assets/assets/Sprite/workers_illustration.png": "81ba904aebb522c2b9577db91abe5245",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7933fac49e17f0aabe5893acad87b84d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0db93455648d1e17fbdc7b385e48690e",
"/": "0db93455648d1e17fbdc7b385e48690e",
"main.dart.js": "6b8de8e9aa1583d61f618280386aa632",
"manifest.json": "07b3ef826fc60c7677e02741deace807",
"version.json": "f80e59adfc91b2836adff0d0fb73cd69"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
