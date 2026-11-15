/**
 * CROKEA - Haute Joaillerie Textile
 * Script partagé : Catalogue, Panier Écrin, Menu Mobile, Notifications Toast, Concierge WhatsApp & Guides d'Atelier
 */

const CROKEA_CONFIG = {
  // Numéro WhatsApp principal pour commandes (Bénin +229 01 40 82 04 73)
  whatsappNumber: "2290140820473",
  whatsappNumberFormatted: "+229 01 40 82 04 73",
  // Second numéro pour l'Atelier Direct (Bénin +229 01 44 09 69 15)
  whatsappDirectNumber: "2290144096915",
  whatsappDirectNumberFormatted: "+229 01 44 09 69 15",
  whatsappGroupUrl: "https://chat.whatsapp.com/H3HMwhpYP3G0T0BRv0NSAe?s=cl&p=i&mlu=4&ilr=4&iam=2",
  facebookUrl: "https://www.facebook.com/share/1AivRknS6m/?mibextid=wwXIfr",
  developerFacebookUrl: "https://www.facebook.com/beaudelaire.amor/",
  developerName: "Amour Govoetchan",
  currencyRate: 650 // 1€ ≈ 650 FCFA
};

// --- BASE DE DONNÉES DU CATALOGUE D'ATELIER ---
const CROKEA_PRODUCTS = {
  "crk-01": {
    id: "crk-01",
    title: "Trèfle Émeraude & Perle",
    subtitle: "Mailles denses en coton égyptien olive noble, perle d'eau douce goutte suspendue au fermoir doré.",
    quote: "« Le trèfle à quatre mailles, symbole porte-bonheur réinventé sous la finesse de l'artisanat textile. Une pièce d'équilibre et de lumière naturelle. »",
    priceFCFA: 16500,
    priceEUR: 25,
    defaultSku: "#CRK-TREFLE-01",
    category: "trefles",
    weight: "2,8 g la paire",
    handcraftTime: "3h de tissage",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5krS5ZANfmzLXpQDP8RVXoHQvGGmY6dTIjQ4zcXUhT2OZbCTPBS6cAgiADEmMmZQubzzEsLps9-79vc8bpci_9FvUStKEAx9Io--ISodUVQxmojko4xEvkR0y6oF8JgsrEJq69OwOKGA7nuGr6VslYQrbe_3zn6wx5ZbC-_E4_VYOnCwVMnEFW04tqjp4akGE50vosOKN9CFbHiTOcgzqCYuT8QiwuVvxPt9w9EJ9",
    thumbnails: [
      { alt: "Trèfle porté", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5krS5ZANfmzLXpQDP8RVXoHQvGGmY6dTIjQ4zcXUhT2OZbCTPBS6cAgiADEmMmZQubzzEsLps9-79vc8bpci_9FvUStKEAx9Io--ISodUVQxmojko4xEvkR0y6oF8JgsrEJq69OwOKGA7nuGr6VslYQrbe_3zn6wx5ZbC-_E4_VYOnCwVMnEFW04tqjp4akGE50vosOKN9CFbHiTOcgzqCYuT8QiwuVvxPt9w9EJ9", label: "Vue principale" },
      { alt: "Point & texture", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2q5ca-zj05I3yJxcqIf7CrzaKu1ueufKyI7QI9uCwZ2wwaj9SOt_4GGcc9W0JQCa2DEeUL0aj-uv0q47w2yii8tHg8GzmB5R_yNuoCb2LI768RPUaRg6x0rOGo70cnEkn3u_H0eQXPJHghasow0Cvv9hwOyPI3jpLJxTmq8Z_bl93HEgwcF7ZxEkC0zaZgRmXkmzd1cp4TgshRdirjqc_Bp3BJWbboL_S5evkY53r", label: "Point & texture" },
      { alt: "Perle & dorure", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvIN7ulFhy1cKQvqz30s_2aFHTJKoFGCW7c5Cxy759SXYWK6BjCrtyOKWcGEZq1-hqqjojCh_vlOXCkcJC1CxLIFHrAvCLcfoFcpe6nWv3gWOYqk0qrJt7z_6XUWPK95tpwatOqNZZbBC0lxhPp4GhbPSOCNnOEi96u3ezza4Tzm3Zx54tpVUh4Wlbt8WHz43YNRRgm7eX1GQ75ohdzBw07VQXaI53Z3RBL76k8Y9h", label: "Perle d'eau douce" },
      { alt: "Écrin en lin", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVIX1fCZADfQio8GNYmVupnYKc2wLJVFVmoLBiw2keN83w3iIZdGLt-PV63-9vj18vULuaqpYmutJM9exExO1JxgOG3Pzal2bot1Za6WvA5FyFz8_GLhxoPYT9OM2r_cDoB9yuB6pOvLQ4MkvwnXABloKsnFh6NSKoh_HgycuLPUSuCy8GFLymEymNKQ4ReHGpIa-rQpkb-QQ_ReDv7E1mHnSOT1lKTg1EEzHZE3dU", label: "Écrin en lin" }
    ],
    shades: [
      { name: "Vert Émeraude", color: "#284112", sku: "#CRK-TREFLE-01" },
      { name: "Sauge Douce", color: "#8FAE73", sku: "#CRK-TREFLE-02" },
      { name: "Ivoire & Or", color: "#F4EFE6", sku: "#CRK-TREFLE-03" },
      { name: "Noir Profond", color: "#261910", sku: "#CRK-TREFLE-04" }
    ]
  },
  "crk-02": {
    id: "crk-02",
    title: "Boucles Rosaces Crokea – Rose Poudré & Nacre",
    subtitle: "Notre modèle signature : 12 pétales au micro-crochet délicat enchâssant un disque de nacre naturelle d'Orient.",
    quote: "« Inspirée de la floraison printanière, la rosace Crokea combine la technique séculaire du crochet de dentelle et le lustre pur d'une perle d'eau douce d'un blanc soyeux. D'une légèreté plume, elles habillent vos journées avec douceur et romantisme. »",
    priceFCFA: 18000,
    priceEUR: 28,
    defaultSku: "#CRK-ROSACE-02",
    category: "roses pastel",
    weight: "3,2 g la paire",
    handcraftTime: "4h de tissage",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0lsmITVY7bK_bkFdLBeqd1WSrXT0wCSkyo8Grml3kbvZdkbpjhodICP67I88W0iNigJUjSEWQKY5H9n9Uh0WIuvZJRDaRZucvXpN-17krczLHN3ZrWJNJkFsyZGuk1sMD4jmUv7ilkLS1vyxRW6HyKanihrbiTLBjaqOx6GcFt05wgS0CPim0DOCztLWOwlwIFUnd6uGIBJFcTJ77j_o0JZ57IrTsjoruiFqI_7Tc",
    thumbnails: [
      { alt: "Portée au soleil", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0lsmITVY7bK_bkFdLBeqd1WSrXT0wCSkyo8Grml3kbvZdkbpjhodICP67I88W0iNigJUjSEWQKY5H9n9Uh0WIuvZJRDaRZucvXpN-17krczLHN3ZrWJNJkFsyZGuk1sMD4jmUv7ilkLS1vyxRW6HyKanihrbiTLBjaqOx6GcFt05wgS0CPim0DOCztLWOwlwIFUnd6uGIBJFcTJ77j_o0JZ57IrTsjoruiFqI_7Tc", label: "Portée au soleil" },
      { alt: "Point & texture", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2q5ca-zj05I3yJxcqIf7CrzaKu1ueufKyI7QI9uCwZ2wwaj9SOt_4GGcc9W0JQCa2DEeUL0aj-uv0q47w2yii8tHg8GzmB5R_yNuoCb2LI768RPUaRg6x0rOGo70cnEkn3u_H0eQXPJHghasow0Cvv9hwOyPI3jpLJxTmq8Z_bl93HEgwcF7ZxEkC0zaZgRmXkmzd1cp4TgshRdirjqc_Bp3BJWbboL_S5evkY53r", label: "Point & texture" },
      { alt: "Perle & dorure", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvIN7ulFhy1cKQvqz30s_2aFHTJKoFGCW7c5Cxy759SXYWK6BjCrtyOKWcGEZq1-hqqjojCh_vlOXCkcJC1CxLIFHrAvCLcfoFcpe6nWv3gWOYqk0qrJt7z_6XUWPK95tpwatOqNZZbBC0lxhPp4GhbPSOCNnOEi96u3ezza4Tzm3Zx54tpVUh4Wlbt8WHz43YNRRgm7eX1GQ75ohdzBw07VQXaI53Z3RBL76k8Y9h", label: "Perle & dorure" },
      { alt: "Écrin en lin", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVIX1fCZADfQio8GNYmVupnYKc2wLJVFVmoLBiw2keN83w3iIZdGLt-PV63-9vj18vULuaqpYmutJM9exExO1JxgOG3Pzal2bot1Za6WvA5FyFz8_GLhxoPYT9OM2r_cDoB9yuB6pOvLQ4MkvwnXABloKsnFh6NSKoh_HgycuLPUSuCy8GFLymEymNKQ4ReHGpIa-rQpkb-QQ_ReDv7E1mHnSOT1lKTg1EEzHZE3dU", label: "Écrin en lin" }
    ],
    shades: [
      { name: "Rose Poudré", color: "#E8C2B8", sku: "#CRK-ROSACE-02" },
      { name: "Vert Forêt", color: "#2C4A28", sku: "#CRK-ROSACE-03" },
      { name: "Fuchsia Vibrant", color: "#B82B57", sku: "#CRK-ROSACE-04" },
      { name: "Blanc Crème Nacré", color: "#F4EFE6", sku: "#CRK-ROSACE-01" },
      { name: "Terracotta Solaire", color: "#B45A3C", sku: "#CRK-ROSACE-05" }
    ]
  },
  "crk-03": {
    id: "crk-03",
    title: "Duo Pétales Fuchsia & Nacre",
    subtitle: "Un contraste audacieux et joyeux. Fibres éclatantes et réfraction perlée pour illuminer le port de tête.",
    quote: "« La vivacité du fuchsia magnifie la pureté de la nacre naturelle. Une création festive et affirmée qui illumine instantanément une tenue. »",
    priceFCFA: 15000,
    priceEUR: 23,
    defaultSku: "#CRK-PETALE-03",
    category: "roses festif",
    weight: "3,0 g la paire",
    handcraftTime: "3h de tissage",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPWnOAzC6cZs9B2W9M6DheUshEP1itbAXV47-7MNClGOkSFcUKpt-aVBTfPSfWe0bAx3Mf1COKSJBLb7-c-tfYbGcQlQGMm-QKJeo9NVNyERxuAFISQjAmY2Q64r6naDbDpWYjNhmQfQbMa8jcjZCzjY6ep7y1aMPE4ZeYIzN1dovYL8qTMqDPX-53ZK5YHTsG6LD_LUzZLVRn7OzxxxnMaQfR1YHh-ivfKMgkm6jf",
    thumbnails: [
      { alt: "Duo Pétales Fuchsia", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPWnOAzC6cZs9B2W9M6DheUshEP1itbAXV47-7MNClGOkSFcUKpt-aVBTfPSfWe0bAx3Mf1COKSJBLb7-c-tfYbGcQlQGMm-QKJeo9NVNyERxuAFISQjAmY2Q64r6naDbDpWYjNhmQfQbMa8jcjZCzjY6ep7y1aMPE4ZeYIzN1dovYL8qTMqDPX-53ZK5YHTsG6LD_LUzZLVRn7OzxxxnMaQfR1YHh-ivfKMgkm6jf", label: "Vue portée" },
      { alt: "Point & texture", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2q5ca-zj05I3yJxcqIf7CrzaKu1ueufKyI7QI9uCwZ2wwaj9SOt_4GGcc9W0JQCa2DEeUL0aj-uv0q47w2yii8tHg8GzmB5R_yNuoCb2LI768RPUaRg6x0rOGo70cnEkn3u_H0eQXPJHghasow0Cvv9hwOyPI3jpLJxTmq8Z_bl93HEgwcF7ZxEkC0zaZgRmXkmzd1cp4TgshRdirjqc_Bp3BJWbboL_S5evkY53r", label: "Détail de maille" },
      { alt: "Nacre d'eau douce", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvIN7ulFhy1cKQvqz30s_2aFHTJKoFGCW7c5Cxy759SXYWK6BjCrtyOKWcGEZq1-hqqjojCh_vlOXCkcJC1CxLIFHrAvCLcfoFcpe6nWv3gWOYqk0qrJt7z_6XUWPK95tpwatOqNZZbBC0lxhPp4GhbPSOCNnOEi96u3ezza4Tzm3Zx54tpVUh4Wlbt8WHz43YNRRgm7eX1GQ75ohdzBw07VQXaI53Z3RBL76k8Y9h", label: "Nacre polie" },
      { alt: "Écrin lin", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVIX1fCZADfQio8GNYmVupnYKc2wLJVFVmoLBiw2keN83w3iIZdGLt-PV63-9vj18vULuaqpYmutJM9exExO1JxgOG3Pzal2bot1Za6WvA5FyFz8_GLhxoPYT9OM2r_cDoB9yuB6pOvLQ4MkvwnXABloKsnFh6NSKoh_HgycuLPUSuCy8GFLymEymNKQ4ReHGpIa-rQpkb-QQ_ReDv7E1mHnSOT1lKTg1EEzHZE3dU", label: "Écrin signature" }
    ],
    shades: [
      { name: "Fuchsia Vibrant", color: "#B82B57", sku: "#CRK-PETALE-03" },
      { name: "Pourpre Royal", color: "#543214", sku: "#CRK-PETALE-01" },
      { name: "Corail Doux", color: "#E8A298", sku: "#CRK-PETALE-02" }
    ]
  },
  "crk-04": {
    id: "crk-04",
    title: "Fleur Solaire & Perle Baroque",
    subtitle: "Inspirée des soleils d'été. Fleur tissée en fil ocre doré et parée d'une perle baroque singulière d'eau douce.",
    quote: "« Chaque perle baroque possède sa propre forme sculptée par la nature. Alliée au jaune solaire, elle forme une parure d'énergie et de caractère. »",
    priceFCFA: 19500,
    priceEUR: 30,
    defaultSku: "#CRK-SOLAIRE-04",
    category: "roses festif",
    weight: "3,5 g la paire",
    handcraftTime: "4h de tissage",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0InCmTO_qVrXTph8_e5B4x-p7yqvLX2tcQKOm7OPll351r8RxAL8KJnOJ6fytdN3AllKBBzcuPdP4RdAnEbl3mUELM3FDlOexW_nkDNL8BZgMelrg3KrKtdkucjn3G_MfPYJiwq9gJ51vwXpVQYq6p6kKKg133GNX8XVPodcdWEA1IU9rR0Y9eda1UsKh_0uK_KZvZuUpRS5JLg8y8IMkpYKtAVfWKtXmx-CamPPl",
    thumbnails: [
      { alt: "Fleur Solaire & Perle", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0InCmTO_qVrXTph8_e5B4x-p7yqvLX2tcQKOm7OPll351r8RxAL8KJnOJ6fytdN3AllKBBzcuPdP4RdAnEbl3mUELM3FDlOexW_nkDNL8BZgMelrg3KrKtdkucjn3G_MfPYJiwq9gJ51vwXpVQYq6p6kKKg133GNX8XVPodcdWEA1IU9rR0Y9eda1UsKh_0uK_KZvZuUpRS5JLg8y8IMkpYKtAVfWKtXmx-CamPPl", label: "Vue d'ensemble" },
      { alt: "Point de crochet", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2q5ca-zj05I3yJxcqIf7CrzaKu1ueufKyI7QI9uCwZ2wwaj9SOt_4GGcc9W0JQCa2DEeUL0aj-uv0q47w2yii8tHg8GzmB5R_yNuoCb2LI768RPUaRg6x0rOGo70cnEkn3u_H0eQXPJHghasow0Cvv9hwOyPI3jpLJxTmq8Z_bl93HEgwcF7ZxEkC0zaZgRmXkmzd1cp4TgshRdirjqc_Bp3BJWbboL_S5evkY53r", label: "Point de fleur" },
      { alt: "Perle baroque", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvIN7ulFhy1cKQvqz30s_2aFHTJKoFGCW7c5Cxy759SXYWK6BjCrtyOKWcGEZq1-hqqjojCh_vlOXCkcJC1CxLIFHrAvCLcfoFcpe6nWv3gWOYqk0qrJt7z_6XUWPK95tpwatOqNZZbBC0lxhPp4GhbPSOCNnOEi96u3ezza4Tzm3Zx54tpVUh4Wlbt8WHz43YNRRgm7eX1GQ75ohdzBw07VQXaI53Z3RBL76k8Y9h", label: "Perle baroque" },
      { alt: "Pochon en lin", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVIX1fCZADfQio8GNYmVupnYKc2wLJVFVmoLBiw2keN83w3iIZdGLt-PV63-9vj18vULuaqpYmutJM9exExO1JxgOG3Pzal2bot1Za6WvA5FyFz8_GLhxoPYT9OM2r_cDoB9yuB6pOvLQ4MkvwnXABloKsnFh6NSKoh_HgycuLPUSuCy8GFLymEymNKQ4ReHGpIa-rQpkb-QQ_ReDv7E1mHnSOT1lKTg1EEzHZE3dU", label: "Écrin lin" }
    ],
    shades: [
      { name: "Jaune Solaire / Ocre", color: "#D4A017", sku: "#CRK-SOLAIRE-04" },
      { name: "Terracotta Solaire", color: "#B45A3C", sku: "#CRK-SOLAIRE-02" },
      { name: "Lin Naturel", color: "#E6E2DC", sku: "#CRK-SOLAIRE-01" }
    ]
  },
  "crk-05": {
    id: "crk-05",
    title: "Trèfle Blanc Nacré & Fil d'Or",
    subtitle: "Un trèfle de sérénité au fil de coton immaculé, discrètement entrelacé d'un fil d'or scintillant.",
    quote: "« La pureté du blanc d'Égypte se mêle à la discrétion d'un fil doré précieux. Une parure parfaite pour les mariages et cérémonies d'exception. »",
    priceFCFA: 17000,
    priceEUR: 26,
    defaultSku: "#CRK-TREFLE-BLANC",
    category: "trefles pastel",
    weight: "2,9 g la paire",
    handcraftTime: "3h30 de tissage",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9M3gM19sq73JGTvg4U0GckToUzh3CIA5J_KawbwkPg-GK2GfIpOyFkRV7ggcadmI86JQ98NZA7SoXyW42nfvDGQTjrpbPeqsXHVsLafCF75rzO9Ew4XCbDvmzxR96NGVrgP9xmaJrCH1OQbuD_QPuQSXRV6qQOIVkpxOynzEH2SrCK4vYhgPqi1fPz-47X5w1VttpTFFaF5czFNZwjtpfwUih137qU7HuWcvraqxq",
    thumbnails: [
      { alt: "Trèfle Blanc Nacré & Fil d'Or", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9M3gM19sq73JGTvg4U0GckToUzh3CIA5J_KawbwkPg-GK2GfIpOyFkRV7ggcadmI86JQ98NZA7SoXyW42nfvDGQTjrpbPeqsXHVsLafCF75rzO9Ew4XCbDvmzxR96NGVrgP9xmaJrCH1OQbuD_QPuQSXRV6qQOIVkpxOynzEH2SrCK4vYhgPqi1fPz-47X5w1VttpTFFaF5czFNZwjtpfwUih137qU7HuWcvraqxq", label: "Vue portée" },
      { alt: "Point & texture", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2q5ca-zj05I3yJxcqIf7CrzaKu1ueufKyI7QI9uCwZ2wwaj9SOt_4GGcc9W0JQCa2DEeUL0aj-uv0q47w2yii8tHg8GzmB5R_yNuoCb2LI768RPUaRg6x0rOGo70cnEkn3u_H0eQXPJHghasow0Cvv9hwOyPI3jpLJxTmq8Z_bl93HEgwcF7ZxEkC0zaZgRmXkmzd1cp4TgshRdirjqc_Bp3BJWbboL_S5evkY53r", label: "Fil d'or & coton" },
      { alt: "Perle d'eau douce", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvIN7ulFhy1cKQvqz30s_2aFHTJKoFGCW7c5Cxy759SXYWK6BjCrtyOKWcGEZq1-hqqjojCh_vlOXCkcJC1CxLIFHrAvCLcfoFcpe6nWv3gWOYqk0qrJt7z_6XUWPK95tpwatOqNZZbBC0lxhPp4GhbPSOCNnOEi96u3ezza4Tzm3Zx54tpVUh4Wlbt8WHz43YNRRgm7eX1GQ75ohdzBw07VQXaI53Z3RBL76k8Y9h", label: "Perle blanche" },
      { alt: "Écrin lin", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVIX1fCZADfQio8GNYmVupnYKc2wLJVFVmoLBiw2keN83w3iIZdGLt-PV63-9vj18vULuaqpYmutJM9exExO1JxgOG3Pzal2bot1Za6WvA5FyFz8_GLhxoPYT9OM2r_cDoB9yuB6pOvLQ4MkvwnXABloKsnFh6NSKoh_HgycuLPUSuCy8GFLymEymNKQ4ReHGpIa-rQpkb-QQ_ReDv7E1mHnSOT1lKTg1EEzHZE3dU", label: "Écrin lin" }
    ],
    shades: [
      { name: "Blanc Nacré & Or", color: "#F4EFE6", sku: "#CRK-TREFLE-BLANC" },
      { name: "Argent & Ivoire", color: "#CAC6C0", sku: "#CRK-TREFLE-ARGENT" },
      { name: "Rose Pâle & Or", color: "#F8DDCF", sku: "#CRK-TREFLE-ROSE" }
    ]
  },
  "crk-06": {
    id: "crk-06",
    title: "Camélia Écru & Perles d'Eau Douce",
    subtitle: "Courbes délicates et superposition de mailles évoquant le pétale de camélia sous la rosée matinale.",
    quote: "« Hommage à la fleur de camélia : un tissage tout en relief et délicatesse, complété par trois micro-perles pendantes en cascade douce. »",
    priceFCFA: 18500,
    priceEUR: 28,
    defaultSku: "#CRK-CAMELIA-06",
    category: "roses pastel",
    weight: "3,3 g la paire",
    handcraftTime: "4h de tissage",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJeTiCxEZeGRztL091T63ZqRR3n0R5zpNh5AExRHJ5jHALZHg7OGTcr6jG_RhCPI0tnmlsmcHWRWnTFbbCb5i9Xk1I0eQDnq2pe1X1VmY6QMl5e9jFyGVy4q2awkL-4aQ47693wL4AVJ0lTJEGtn4TUxFWhrKMk5dOL4S-2M-f0Wg3q-_l4NrIF8EmH7-cMd4mAGE0XMwFgeJ0Njat2PJna_7AXXMcRnUGd8J5SeNu",
    thumbnails: [
      { alt: "Camélia Écru", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJeTiCxEZeGRztL091T63ZqRR3n0R5zpNh5AExRHJ5jHALZHg7OGTcr6jG_RhCPI0tnmlsmcHWRWnTFbbCb5i9Xk1I0eQDnq2pe1X1VmY6QMl5e9jFyGVy4q2awkL-4aQ47693wL4AVJ0lTJEGtn4TUxFWhrKMk5dOL4S-2M-f0Wg3q-_l4NrIF8EmH7-cMd4mAGE0XMwFgeJ0Njat2PJna_7AXXMcRnUGd8J5SeNu", label: "Vue portée" },
      { alt: "Point & texture", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2q5ca-zj05I3yJxcqIf7CrzaKu1ueufKyI7QI9uCwZ2wwaj9SOt_4GGcc9W0JQCa2DEeUL0aj-uv0q47w2yii8tHg8GzmB5R_yNuoCb2LI768RPUaRg6x0rOGo70cnEkn3u_H0eQXPJHghasow0Cvv9hwOyPI3jpLJxTmq8Z_bl93HEgwcF7ZxEkC0zaZgRmXkmzd1cp4TgshRdirjqc_Bp3BJWbboL_S5evkY53r", label: "Pétales superposés" },
      { alt: "Cascade de perles", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvIN7ulFhy1cKQvqz30s_2aFHTJKoFGCW7c5Cxy759SXYWK6BjCrtyOKWcGEZq1-hqqjojCh_vlOXCkcJC1CxLIFHrAvCLcfoFcpe6nWv3gWOYqk0qrJt7z_6XUWPK95tpwatOqNZZbBC0lxhPp4GhbPSOCNnOEi96u3ezza4Tzm3Zx54tpVUh4Wlbt8WHz43YNRRgm7eX1GQ75ohdzBw07VQXaI53Z3RBL76k8Y9h", label: "Perles en cascade" },
      { alt: "Écrin lin", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVIX1fCZADfQio8GNYmVupnYKc2wLJVFVmoLBiw2keN83w3iIZdGLt-PV63-9vj18vULuaqpYmutJM9exExO1JxgOG3Pzal2bot1Za6WvA5FyFz8_GLhxoPYT9OM2r_cDoB9yuB6pOvLQ4MkvwnXABloKsnFh6NSKoh_HgycuLPUSuCy8GFLymEymNKQ4ReHGpIa-rQpkb-QQ_ReDv7E1mHnSOT1lKTg1EEzHZE3dU", label: "Écrin lin" }
    ],
    shades: [
      { name: "Écru Chaud", color: "#FFF1EA", sku: "#CRK-CAMELIA-06" },
      { name: "Chocolat Poudré", color: "#543214", sku: "#CRK-CAMELIA-02" },
      { name: "Vert Amande", color: "#CCEDAC", sku: "#CRK-CAMELIA-03" }
    ]
  }
};

// --- GESTION DU PANIER (L'ÉCRIN CROKEA) ---
class CrokeaCart {
  constructor() {
    this.storageKey = 'crokea_cart_items';
    this.items = this.load();
    this.isGift = false;
    this.giftMessage = "";
    this.initUI();
  }

  load() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn("Impossible de charger le panier :", e);
      return [];
    }
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    } catch (e) {
      console.warn("Impossible de sauvegarder le panier :", e);
    }
    this.updateBadges();
    this.renderDrawer();
  }

  addItem(product) {
    const key = `${product.id}_${product.shade || 'standard'}_${product.clasp || 'standard'}`;
    const existing = this.items.find(item => item.cartKey === key);

    if (existing) {
      existing.quantity += product.quantity || 1;
    } else {
      this.items.push({
        ...product,
        cartKey: key,
        quantity: product.quantity || 1
      });
    }

    this.save();
    CrokeaUI.showToast(`« ${product.title} » ajouté à votre écrin !`, 'check_circle');
    this.openDrawer();
  }

  removeItem(cartKey) {
    this.items = this.items.filter(item => item.cartKey !== cartKey);
    this.save();
  }

  updateQuantity(cartKey, qty) {
    const item = this.items.find(i => i.cartKey === cartKey);
    if (item) {
      item.quantity = Math.max(1, qty);
      this.save();
    }
  }

  getTotalCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPriceFCFA() {
    return this.items.reduce((total, item) => total + (item.priceFCFA * item.quantity), 0);
  }

  getTotalPriceEUR() {
    return Math.round(this.getTotalPriceFCFA() / CROKEA_CONFIG.currencyRate);
  }

  initUI() {
    this.updateBadges();
    this.renderDrawer();
    this.bindEvents();
  }

  updateBadges() {
    const count = this.getTotalCount();
    document.querySelectorAll('.cart-count-badge').forEach(badge => {
      badge.textContent = count;
      if (count > 0) {
        badge.classList.remove('hidden');
        badge.classList.add('flex');
      } else {
        badge.classList.remove('flex');
        badge.classList.add('hidden');
      }
    });
  }

  openDrawer() {
    const drawer = document.getElementById('crokea-cart-drawer');
    const overlay = document.getElementById('crokea-cart-overlay');
    if (drawer && overlay) {
      overlay.classList.remove('opacity-0', 'pointer-events-none');
      overlay.classList.add('opacity-100');
      drawer.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
    }
  }

  closeDrawer() {
    const drawer = document.getElementById('crokea-cart-drawer');
    const overlay = document.getElementById('crokea-cart-overlay');
    if (drawer && overlay) {
      overlay.classList.remove('opacity-100');
      overlay.classList.add('opacity-0', 'pointer-events-none');
      drawer.classList.add('translate-x-full');
      document.body.style.overflow = '';
    }
  }

  renderDrawer() {
    const container = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('cart-empty-state');
    const footer = document.getElementById('cart-footer-summary');
    const totalFcfaEl = document.getElementById('cart-total-fcfa');
    const totalEurEl = document.getElementById('cart-total-eur');
    const itemsCountEl = document.getElementById('cart-drawer-count');

    if (!container) return;

    const count = this.getTotalCount();
    if (itemsCountEl) itemsCountEl.textContent = `(${count} pièce${count > 1 ? 's' : ''})`;

    if (this.items.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      if (footer) footer.classList.add('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    if (footer) footer.classList.remove('hidden');

    container.innerHTML = this.items.map(item => `
      <div class="flex gap-space-sm p-space-sm bg-surface-container-lowest rounded-DEFAULT border border-outline-variant/30 shadow-sm relative group">
        <img src="${item.image}" alt="${item.title}" class="w-20 h-24 object-cover rounded-DEFAULT bg-surface-container shrink-0" />
        <div class="flex flex-col flex-1 justify-between min-w-0">
          <div>
            <div class="flex items-start justify-between gap-1">
              <h4 class="font-headline-sm text-[16px] text-primary truncate leading-tight">${item.title}</h4>
              <button type="button" class="text-on-surface-variant hover:text-error transition-colors p-1" onclick="window.crokeaCart.removeItem('${item.cartKey}')" title="Retirer">
                <span class="material-symbols-outlined text-[18px]">delete</span>
              </button>
            </div>
            ${item.shade ? `<p class="font-body-sm text-[12px] text-on-surface-variant">Nuance : <strong class="text-primary">${item.shade}</strong></p>` : ''}
            ${item.clasp ? `<p class="font-body-sm text-[11px] text-on-surface-variant truncate">Attache : ${item.clasp}</p>` : ''}
          </div>
          <div class="flex items-center justify-between pt-2 mt-auto">
            <div class="flex items-center border border-outline-variant rounded-full px-2 py-0.5 bg-surface">
              <button type="button" class="text-primary hover:text-tertiary-container px-1 font-bold text-sm" onclick="window.crokeaCart.updateQuantity('${item.cartKey}', ${item.quantity - 1})">-</button>
              <span class="font-body-sm text-[13px] font-semibold text-primary px-2">${item.quantity}</span>
              <button type="button" class="text-primary hover:text-tertiary-container px-1 font-bold text-sm" onclick="window.crokeaCart.updateQuantity('${item.cartKey}', ${item.quantity + 1})">+</button>
            </div>
            <div class="text-right">
              <span class="font-headline-sm text-[16px] font-semibold text-primary-container">${(item.priceFCFA * item.quantity).toLocaleString('fr-FR')} FCFA</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    const totalFCFA = this.getTotalPriceFCFA();
    const totalEUR = this.getTotalPriceEUR();
    if (totalFcfaEl) totalFcfaEl.textContent = `${totalFCFA.toLocaleString('fr-FR')} FCFA`;
    if (totalEurEl) totalEurEl.textContent = `soit env. ${totalEUR} €`;

    // Met à jour le lien WhatsApp du panier
    this.updateCheckoutLink();
  }

  updateCheckoutLink() {
    const whatsappBtn = document.getElementById('cart-whatsapp-checkout');
    if (!whatsappBtn) return;

    const totalFCFA = this.getTotalPriceFCFA();
    const totalEUR = this.getTotalPriceEUR();

    let message = "Bonjour l'Atelier Crokea, je souhaite valider la commande de mon écrin :\n\n";
    this.items.forEach((item, index) => {
      message += `${index + 1}. *${item.title}* (x${item.quantity})\n`;
      if (item.shade) message += `   • Nuance : ${item.shade}\n`;
      if (item.clasp) message += `   • Attache : ${item.clasp}\n`;
      if (item.sku) message += `   • Réf : ${item.sku}\n`;
      message += `   • Sous-total : ${(item.priceFCFA * item.quantity).toLocaleString('fr-FR')} FCFA\n\n`;
    });

    if (this.isGift && this.giftMessage.trim()) {
      message += `🎁 *Option Cadeau demandée* :\nMot personnalisé : « ${this.giftMessage.trim()} »\n\n`;
    }

    message += `*Total de la commande : ${totalFCFA.toLocaleString('fr-FR')} FCFA / ~${totalEUR} €*\n\n`;
    message += "Pouvez-vous me confirmer la disponibilité et le délai de confection à l'atelier ? Merci !";

    const target = CROKEA_CONFIG.whatsappNumber ? `https://wa.me/${CROKEA_CONFIG.whatsappNumber}` : `https://wa.me/`;
    whatsappBtn.href = `${target}?text=${encodeURIComponent(message)}`;
  }

  bindEvents() {
    document.querySelectorAll('.open-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openDrawer();
      });
    });

    const closeBtn = document.getElementById('close-cart-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeDrawer());

    const overlay = document.getElementById('crokea-cart-overlay');
    if (overlay) overlay.addEventListener('click', () => this.closeDrawer());

    // Option Cadeau dans le panier
    const giftCheckbox = document.getElementById('cart-gift-checkbox');
    const giftInputBox = document.getElementById('cart-gift-input-box');
    const giftMsgInput = document.getElementById('cart-gift-msg');

    if (giftCheckbox && giftInputBox) {
      giftCheckbox.addEventListener('change', () => {
        this.isGift = giftCheckbox.checked;
        if (this.isGift) {
          giftInputBox.classList.remove('hidden');
        } else {
          giftInputBox.classList.add('hidden');
        }
        this.updateCheckoutLink();
      });
    }

    if (giftMsgInput) {
      giftMsgInput.addEventListener('input', (e) => {
        this.giftMessage = e.target.value;
        this.updateCheckoutLink();
      });
    }
  }
}

// --- UTILITAIRES D'INTERFACE (UI) ---
const CrokeaUI = {
  showToast(message, icon = 'check_circle') {
    let toast = document.getElementById('crokea-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'crokea-toast';
      toast.className = 'fixed bottom-6 right-6 z-50 bg-primary-container text-on-primary-container px-space-md py-space-sm rounded-full shadow-2xl flex items-center gap-2 transform translate-y-24 opacity-0 pointer-events-none transition-all duration-300 border border-outline-variant/30';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <span class="material-symbols-outlined text-[20px] text-primary-fixed">${icon}</span>
      <span class="font-body-sm text-body-sm font-medium text-white">${message}</span>
    `;
    toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
    }, 3500);
  },

  initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu-drawer');
    const overlay = document.getElementById('mobile-menu-overlay');
    const closeBtn = document.getElementById('close-mobile-menu-btn');

    if (!toggleBtn || !menu) return;

    function openMenu() {
      if (overlay) {
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        overlay.classList.add('opacity-100');
      }
      menu.classList.remove('-translate-x-full');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      if (overlay) {
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0', 'pointer-events-none');
      }
      menu.classList.add('-translate-x-full');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  },

  initConciergeFAB() {
    if (document.getElementById('crokea-concierge-fab')) return;
    
    const fab = document.createElement('div');
    fab.id = 'crokea-concierge-fab';
    fab.className = 'fixed bottom-6 left-6 z-40';
    
    const target = CROKEA_CONFIG.whatsappDirectNumber ? `https://wa.me/${CROKEA_CONFIG.whatsappDirectNumber}` : (CROKEA_CONFIG.whatsappNumber ? `https://wa.me/${CROKEA_CONFIG.whatsappNumber}` : `https://wa.me/`);
    const defaultMsg = encodeURIComponent("Bonjour l'Atelier Crokea, j'aimerais avoir un conseil sur l'une de vos créations.");

    fab.innerHTML = `
      <a href="${target}?text=${defaultMsg}" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-2.5 bg-surface-container-lowest/95 backdrop-blur-md hover:bg-tertiary-container hover:text-on-tertiary text-primary-container px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-outline-variant/30 transform hover:-translate-y-1" title="Discuter avec l'artisane">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-container opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-tertiary-container"></span>
        </span>
        <span class="material-symbols-outlined text-[20px] text-tertiary-container group-hover:text-on-tertiary transition-colors">chat</span>
        <span class="font-label-button text-[13px] hidden sm:inline-block">Atelier Direct</span>
      </a>
    `;
    document.body.appendChild(fab);
  },

  initModals() {
    // Modal Guide d'Entretien
    if (!document.getElementById('crokea-care-modal')) {
      const careModal = document.createElement('div');
      careModal.id = 'crokea-care-modal';
      careModal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300';
      careModal.innerHTML = `
        <div class="relative w-full max-w-lg bg-surface-container-lowest rounded-lg p-space-xl shadow-2xl transform scale-95 transition-transform duration-300 border border-outline-variant/30 max-h-[90vh] overflow-y-auto">
          <button type="button" class="close-care-btn absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container hover:bg-surface-container-high transition-colors">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
          
          <div class="flex items-center gap-2 mb-2">
            <span class="material-symbols-outlined text-tertiary-container text-[22px]">cleaning_services</span>
            <span class="font-label-caps text-label-caps uppercase text-tertiary-container tracking-wider font-semibold">Conseils d'Atelier</span>
          </div>

          <h3 class="font-headline-md text-headline-md text-primary mb-space-md">Guide d'Entretien de la Maille</h3>
          
          <div class="space-y-space-md text-body-sm text-on-surface-variant leading-relaxed">
            <div class="p-space-sm rounded-DEFAULT bg-surface-container-low border border-outline-variant/20">
              <h4 class="font-label-button text-primary font-semibold mb-1 flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px] text-tertiary-container">spa</span>
                <span>1. Nettoyage à sec doux</span>
              </h4>
              <p>Essuyez délicatement vos boucles avec un chiffon microfibre propre. Le fil mercerisé d'Égypte ne retient pas la poussière et garde son lustre sans frottement agressif.</p>
            </div>

            <div class="p-space-sm rounded-DEFAULT bg-surface-container-low border border-outline-variant/20">
              <h4 class="font-label-button text-primary font-semibold mb-1 flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px] text-tertiary-container">water_drop</span>
                <span>2. Parfums &amp; Cosmétiques</span>
              </h4>
              <p>Vaporisez vos parfums et laques avant de fixer vos boucles. Cela préserve la nacre d'eau douce et évite toute décoloration prématurée des dorures à l'or fin 24k.</p>
            </div>

            <div class="p-space-sm rounded-DEFAULT bg-surface-container-low border border-outline-variant/20">
              <h4 class="font-label-button text-primary font-semibold mb-1 flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px] text-tertiary-container">inventory_2</span>
                <span>3. Rangement dans le pochon en lin</span>
              </h4>
              <p>Conservez vos bijoux à plat dans le pochon en lin offert avec chaque commande pour protéger les pétales des pressions extérieures.</p>
            </div>

            <div class="p-space-sm rounded-DEFAULT bg-surface-container-high/40 border border-outline-variant/20">
              <h4 class="font-label-button text-primary font-semibold mb-1 flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px] text-primary">verified</span>
                <span>Garantie d'Atelier à Vie</span>
              </h4>
              <p>Si une maille venait à se détendre ou si un fermoir nécessitait un ajustement, notre atelier assure la remise en état gratuite de vos créations Crokea.</p>
            </div>
          </div>

          <div class="pt-space-lg flex justify-end">
            <button type="button" class="close-care-btn px-6 py-2.5 rounded-full bg-primary-container text-on-primary font-label-button text-label-button hover:bg-primary transition-colors">
              Fermer le guide
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(careModal);

      const closeCare = () => {
        careModal.classList.remove('opacity-100');
        careModal.classList.add('opacity-0', 'pointer-events-none');
        careModal.querySelector('div').classList.remove('scale-100');
        careModal.querySelector('div').classList.add('scale-95');
      };

      const openCare = (e) => {
        if (e) e.preventDefault();
        careModal.classList.remove('opacity-0', 'pointer-events-none');
        careModal.classList.add('opacity-100');
        careModal.querySelector('div').classList.remove('scale-95');
        careModal.querySelector('div').classList.add('scale-100');
      };

      careModal.querySelectorAll('.close-care-btn').forEach(b => b.addEventListener('click', closeCare));
      careModal.addEventListener('click', (e) => { if (e.target === careModal) closeCare(); });

      // Écoute des liens vers le guide d'entretien
      document.querySelectorAll('a[href*="guide-entretien"], [data-open="care-guide"]').forEach(link => {
        link.addEventListener('click', openCare);
      });
    }
  }
};

// Initialisation globale au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  window.crokeaCart = new CrokeaCart();
  CrokeaUI.initMobileMenu();
  CrokeaUI.initConciergeFAB();
  CrokeaUI.initModals();
});
