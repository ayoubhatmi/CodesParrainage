import BinanceLogo from "../images/binance-logo.png";
import eBuyClubLogo from "../images/eBuyClub-logo.png";
import BoursoramaLogo from "../images/boursorama-logo.png";
import VeepeeLogo from "../images/veepee-logo.png";
import CoinbaseLogo from "../images/coinbase-logo.png";
import WirexLogo from "../images/Wirex-logo.png";
import ShowroompriveLogo from "../images/logo-showroomprive.png";

export const offers = [
  {
    name: "Binance",
    logo: BinanceLogo,
    slug: "parrainage-binance",
    category: "Cryptomonnaie",
    description:
      "Binance est un portefeuille de devises numériques et une plateforme d'échange de cryptomonnaies mondiale qui permet d'acheter, vendre et stocker plus de 600 cryptomonnaies.",
    offer: "100$ off", //Avantages filleul
    detailsLink: "https://www.binance.com/fr/activity/referral/offers",
    referralLink:
      "https://www.binance.com/fr/activity/referral/offers/claim?ref=CPA_00HBK316DQ",
    referralCode: "",
    ReferrerRewards:
      "Recevez un bon de réduction sur les frais de trading de 100 USDT.", //Avantages parrain
    RefereeRewards:
      "Recevez un bon de réduction sur les frais de trading de 100 USDT.", //Avantages filleul
  },

  {
    name: "eBuyClub",
    logo: eBuyClubLogo,
    slug: "parrainage-ebuyclub",
    category: "CashBack",
    description:
      "eBuyClub est une plateforme de cashback en ligne permettant à ses utilisateurs acheteurs de se voir reverser une partie du montant de leur achat.",
    offer: "5€", //Avantages filleul
    detailsLink: "https://www.ebuyclub.com/parrainage",
    referralLink: "https://www.ebuyclub.com/?parrain=bechirhatmilf3si",
    referralCode: "",
    ReferrerRewards:
      "Dès le 1er achat de votre filleul, recevez 5€ + 10 % de tous leurs gains à vie.", //Avantages parrain
    RefereeRewards: "5€ de bonus d'inscription.", //Avantages filleul
  },

  {
    name: "Boursorama banque",
    logo: BoursoramaLogo,
    slug: "parrainage-boursorama-banque",
    category: "Banques",
    description:
      "Créée en 1995, Boursorama est une banque 100% en ligne qui permet d'effectuer la majorité des opérations bancaires réalisables dans des structures physiques de façon totalement dématérialisée. Épargne, investissement, emprunt et gestion des comptes au quotidien sont facilités car TOUT se fait en ligne !",
    offer: "130€", //Avantages filleul
    detailsLink:
      "https://www.boursorama.com/aide-en-ligne/nos-offres/parrainage",
    referralLink:
      "https://ouvrir-un-compte.boursorama-banque.com/landing/parrainage?code_parrain=MOHA0793&picture=xzZSLsQ3tGf6H58O8aBd4ha2NkBob6tjNCjjBNZzzNW7UIwycr7zB88EhLPjC2lAB21pOtW_CaXa-SmiXHbSDy9ULjcS7TV53vd21_zhN-0wn7BTeM3mdfo59wwA2JDQdpblE0_i4DKG6tOiW62NMtRlnpqSVZakySDvJZDqOdk&origine=868",
    referralCode: "MOHA0793",
    ReferrerRewards:
      "80€ offerts si le parrain majeur détient au moins l'un des produits suivants: CB activée, produit d'assurance, livret d’épargne, crédit (immobilier ou consommation), un produit de bourse (compte titre, PEA, PEA-PME, Assurance Vie) Dans la limite de 20 parrainages sur 12 mois glissants.", //Avantages parrain
    RefereeRewards:
      "130€ pour l'ouverture d'un compte personnel ou professionnel.", //Avantages filleul
  },

  {
    name: "Veepee",
    logo: VeepeeLogo,
    slug: "parrainage-veepee",
    category: "Mode, Vêtements",
    description:
      "Vous rêviez d'acquérir des produits de grandes marques à prix cassés ? Vente Privée l'a fait ! Retrouvez, chaque jour, de nouvelles promo sur vos vêtements préférées mais aussi sur un ensemble d'équipements pour la maison, sur des voyages ou bien encore de la gastronomie.",
    offer: "10€ bon d'achat", //Avantages filleul
    detailsLink:
      "https://aide.vente-privee.com/article/289-comment-fonctionne-le-parrainage",
    referralLink: "https://www.veepee.fr/gr/registration?mgmcode=383B8EA1",
    referralCode: "383B8EA1",
    ReferrerRewards:
      "Un bon d'achat d'un montant de 10€ valable 30 jours pour une commande de 40€ minimum.", //Avantages parrain
    RefereeRewards:
      "Un bon d'achat d'un montant de 10€ valable 30 jours pour une commande de 40€ minimum.", //Avantages filleul
  },

  {
    name: "Coinbase",
    logo: CoinbaseLogo,
    slug: "parrainage-coinbase",
    category: "Cryptomonnaie",
    description:
      "Coinbase est une plateforme pour acheter et vendre des devises numériques comme le Bitcoin, Ethereum, ou Litecoin. Coinbase est présent dans 32 pays dans le monde.",
    offer: "10$", //Avantages filleul
    detailsLink:
      "https://help.coinbase.com/en/coinbase/other-topics/other/the-coinbase-referral-program",
    referralLink: "https://www.coinbase.com/fr/join/hatmi_w?src=android-link",
    referralCode: "",
    ReferrerRewards: "10$ offerts / filleul.", //Avantages parrain
    RefereeRewards: "10$ pour un achat d'au moins 100$ en cryptomonnaies.", //Avantages filleul
  },

  {
    name: "Wirex",
    logo: WirexLogo,
    slug: "parrainage-wirex",
    category: "Cryptomonnaie",
    description:
      "Wirex est une banque en ligne nouvelle génération qui permet aux particuliers d'avoir un compte en devises traditionnelles (FIAT) et virtuelles avec toutes les crypto monnaies actuellement sur le marché. Vous bénéficiez grâce au compte WIREX d’une carte de paiement VISA (carte de débit classique) qui permet de régler avec des crypto monnaies ou de retirer de l’argent contre des monnaies virtuelles. Wirex c’est également un moyen de transférer de l’argent à l’international en quelques secondes, plus rapide et moins cher que dans un établissement bancaire classique.",
    offer: "30$ NXUSD", //Avantages filleul
    detailsLink: "https://wirexapp.com/refer-a-friend",
    referralLink: "https://wirexapp.com/r/7e6f7033f2834cb793d3ede028e0a169",
    referralCode: "",
    ReferrerRewards: "30$ NXUSD.", //Avantages parrain
    RefereeRewards:
      "Gagnez 30$ NXUSD. Les conditions : Déposez 200$ en crypto sur Wirex dans les 21 jours suivant votre adhésion. et Maintenez un solde crypto de 200$ sur la plateforme pendant 30 jours après votre premier dépôt.", //Avantages filleul
  },
  {
    name: "Showroomprive",
    logo: ShowroompriveLogo,
    slug: "parrainage-showroomprive",
    category: "Mode, Vêtements",
    description:
      "Wirex est une banque en ligne nouvelle génération qui permet aux particuliers d'avoir un compte en devises traditionnelles (FIAT) et virtuelles avec toutes les crypto monnaies actuellement sur le marché. Vous bénéficiez grâce au compte WIREX d’une carte de paiement VISA (carte de débit classique) qui permet de régler avec des crypto monnaies ou de retirer de l’argent contre des monnaies virtuelles. Wirex c’est également un moyen de transférer de l’argent à l’international en quelques secondes, plus rapide et moins cher que dans un établissement bancaire classique.",
    offer: "12€ bon d'achat", //Avantages filleul
    detailsLink: "",
    referralLink: "https://www.showroomprive.com/?p=BECAA4GS",
    referralCode: "",
    ReferrerRewards:
      "12€ en bon d'achat pour toute commande réalisée par le filleul sur une vente privée d'un montant minimum de 50€, hors frais de port + 10€ supplémentaires au bout de 5 parrainages", //Avantages parrain
    RefereeRewards:
      "12€ offert dès votre première commande d'un montant de plus de 50€ ", //Avantages filleul
  },
];
