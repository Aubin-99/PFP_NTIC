-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 07 juin 2022 à 20:15
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ntic_date`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `url` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`, `url`) VALUES
(0, 'Non classé', ''),
(1, 'Hygiène', '18-_Savonne_tes_mains-1652737346491.jpeg'),
(2, 'Parties du corps', '118-_Main-1652737349261.jpeg'),
(3, 'Cuisine', '192-_Ustensiles-1652737351741.jpeg'),
(4, 'Aliments', '222-_Pomme_rouge-1652737352955.jpeg'),
(5, 'Actions', '279-_Balaie-1652737354703.jpeg'),
(6, 'Politesse', '344-_Bonjour-1652737357640.jpeg'),
(7, 'Relations', '352-_Bisou_d\'amoureux-1652737358305.jpeg'),
(8, 'Émotions', '374-_Triste-1652737358803.jpeg'),
(9, 'Verbes', '385-_Lancer-1652737359005.jpeg'),
(10, 'Prépositions & adverbes', '392-_Avec-1652737359369.jpeg'),
(11, 'Pronoms', '397-_Je-1652737359484.jpeg'),
(12, 'Lieux', '411-_Ecole-1652737359736.jpeg'),
(13, 'Famille', '421-_Famille-1652737360138.jpeg'),
(14, 'Activités', '451-_Blocs_et_figurines-1652737360967.jpeg'),
(15, 'Jouets', '494-_Jouets-1652737362209.jpeg'),
(16, 'Objets', '510-_Livres-1652737362663.jpeg'),
(17, 'Transports', '545-_Voiture-1652737364124.jpeg'),
(18, 'Santé', '165-_Prendre_la_temperature-1652737351030.jpeg'),
(19, 'Personnalisé', 'customPicto.png');

-- --------------------------------------------------------

--
-- Structure de la table `educator`
--

DROP TABLE IF EXISTS `educator`;
CREATE TABLE IF NOT EXISTS `educator` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `educator_user`
--

DROP TABLE IF EXISTS `educator_user`;
CREATE TABLE IF NOT EXISTS `educator_user` (
  `idEducator` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  KEY `idUser` (`idUser`) USING BTREE,
  KEY `idEducator` (`idEducator`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `pictogram`
--

DROP TABLE IF EXISTS `pictogram`;
CREATE TABLE IF NOT EXISTS `pictogram` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idCaterogy` (`idCategory`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1293 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `pictogram`
--

INSERT INTO `pictogram` (`id`, `name`, `idCategory`, `url`) VALUES
(731, 'Ferme la porte', 1, '1-_Ferme_la_porte-1652737346084.jpeg'),
(732, 'Baisse ton pantalon', 1, '2-_Baisse_ton_pantalon-1652737346111.jpeg'),
(733, 'Toilette', 1, '3-_Toilette-1652737346131.jpeg'),
(734, 'Déchire le papier', 1, '4-_Dechire_le_papier-1652737346169.jpeg'),
(735, 'Plie le papier', 1, '5-_Plie_le_papier-1652737346185.jpeg'),
(736, 'Essuie tes fesses', 1, '6-_Essuie_tes_fesses-1652737346212.jpeg'),
(737, 'Papier sale', 1, '7-_Papier_sale-1652737346231.jpeg'),
(738, 'Papier propre', 1, '8-_Papier_propre-1652737346252.jpeg'),
(739, 'Caca dans la toilette', 1, '9-_Caca_dans_la_toilette-1652737346277.jpeg'),
(740, 'Essuie le pipi', 1, '10-_Essuie_le_pipi-1652737346324.jpeg'),
(741, 'Jette le papier', 1, '11-_Jette_le_papier-1652737346366.jpeg'),
(742, 'Monte tes pantalons', 1, '12-_Monte_tes_pantalons-1652737346384.jpeg'),
(743, 'Tire la chasse', 1, '13-_Tire_la_chasse-1652737346406.jpeg'),
(744, 'Ouvre la porte', 1, '14-_Ouvre_la_porte-1652737346431.jpeg'),
(745, 'Lave tes mains', 1, '15-_Lave_tes_mains-1652737346448.jpeg'),
(746, 'Ouvre le robinet', 1, '16-_Ouvre_le_robinet-1652737346467.jpeg'),
(747, 'Mouille tes mains', 1, '17-_Mouille_tes_mains-1652737346475.jpeg'),
(748, 'Savonne tes mains', 1, '18-_Savonne_tes_mains-1652737346491.jpeg'),
(749, 'Ferme le robinet', 1, '19-_Ferme_le_robinet-1652737346514.jpeg'),
(750, 'Essuie tes mains', 1, '20-_Essuie_tes_mains-1652737346544.jpeg'),
(751, 'Envie de pipi', 1, '21-_Envie_de_pipi-1652737346556.jpeg'),
(752, 'Mouiller ses vêtements', 1, '22-_Mouiller_ses_vetements-1652737346572.jpeg'),
(753, 'Force sur la toilette', 1, '23-_Force_sur_la_toilette-1652737346594.jpeg'),
(754, 'Pipi debout', 1, '24-_Pipi_debout-1652737346667.jpeg'),
(755, 'Essuie le pipi', 1, '25-_Essuie_le_pipi-1652737346738.jpeg'),
(756, 'Urinoir', 1, '26-_Urinoir-1652737346765.jpeg'),
(757, 'Se lever la nuit', 1, '27-_Se_lever_la_nuit-1652737346790.jpeg'),
(758, 'Pipi debout', 1, '28-_Pipi_debout-1652737346812.jpeg'),
(759, 'Toilette', 1, '29-Toilette-1652737346836.jpeg'),
(760, 'Prends du papier', 1, '30-_Prends_du_papier-1652737346883.jpeg'),
(761, 'Essuie tes fesses', 1, '31-_Essuie_tes_fesses-1652737346927.jpeg'),
(762, 'Tire la chasse', 1, '32-_Tire_la_chasse-1652737346999.jpeg'),
(763, 'Fier de soi', 1, '33-_Fier_de_soi-1652737347018.jpeg'),
(764, 'Mouille ta brosse', 1, '34-_Mouille_ta_brosse-1652737347036.jpeg'),
(765, 'Mets du dentifrice', 1, '35-_Mets_du_dentifrice-1652737347051.jpeg'),
(766, 'Brosse tes dents', 1, '36-_Brosse_tes_dents-1652737347060.jpeg'),
(767, 'Rince ta bouche', 1, '37-_Rince_ta_bouche-1652737347088.jpeg'),
(768, 'Crache', 1, '38-_Crache-1652737347097.jpeg'),
(769, 'Peigne tes cheveux', 1, '39-_Peigne_tes_cheveux-1652737347105.jpeg'),
(770, 'Vernis à ongles', 1, '40-_Vernis_a_ongles-1652737347125.jpeg'),
(771, 'Couper les ongles', 1, '41-_Couper_les_ongles-1652737347147.jpeg'),
(772, 'Bain', 1, '42-_Bain-1652737347170.jpeg'),
(773, 'Déshabille-toi', 1, '43-_Deshabille-toi-1652737347182.jpeg'),
(774, 'Entre dans le bain', 1, '44-_Entre_dans_le_bain-1652737347198.jpeg'),
(775, 'Lave tes mains', 1, '45-_Lave_tes_mains-1652737347213.jpeg'),
(776, 'Mets du savon', 1, '46-_Mets_du_savon-1652737347246.jpeg'),
(777, 'Savonne', 1, '47-_Savonne-1652737347275.jpeg'),
(778, 'Lave ton visage', 1, '48-_Lave_ton_visage-1652737347295.jpeg'),
(779, 'Lave ton épaule', 1, '49-_Lave_ton_epaule-1652737347313.jpeg'),
(780, 'Lave tes aisselles', 1, '50-_Lave_tes_aisselles-1652737347363.jpeg'),
(781, 'Lave ton ventre', 1, '51-_Lave_ton_ventre-1652737347380.jpeg'),
(782, 'Lave tes fesses', 1, '52-_Lave_tes_fesses-1652737347391.jpeg'),
(783, 'Lave ton pénis', 1, '53-_Lave_ton_penis-1652737347406.jpeg'),
(784, 'Lave tes jambes', 1, '54-_Lave_tes_jambes-1652737347415.jpeg'),
(785, 'Mouille tes cheveux', 1, '55-_Mouille_tes_cheveux-1652737347457.jpeg'),
(786, 'Essuie tes yeux', 1, '56-_Essuie_tes_yeux-1652737347480.jpeg'),
(787, 'Prends du shampoing', 1, '57-_Prends_du_shampoing-1652737347492.jpeg'),
(788, 'Mousse tes cheveux', 1, '58-_Mousse_tes_cheveux-1652737347502.jpeg'),
(789, 'Rince tes cheveux', 1, '59-_Rince_tes_cheveux-1652737347510.jpeg'),
(790, 'Essuie-toi', 1, '60-_Essuie-toi-1652737347541.jpeg'),
(791, 'Mets tes culottes', 1, '61-_Mets_tes_culottes-1652737347598.jpeg'),
(792, 'Mets ta camisole', 1, '62-_Mets_ta_camisole-1652737347604.jpeg'),
(793, 'Mets ton chandail', 1, '63-_Mets_ton_chandail-1652737347621.jpeg'),
(794, 'Mets tes bas', 1, '64-_Mets_tes_bas-1652737347629.jpeg'),
(795, 'Mets ta jupe', 1, '65-_Mets_ta_jupe-1652737347644.jpeg'),
(796, 'Mets ton pantalon', 1, '66-_Mets_ton_pantalon-1652737347662.jpeg'),
(797, 'Mets tes chaussettes', 1, '67-_Mets_tes_chaussettes-1652737347694.jpeg'),
(798, 'Mets tes bas', 1, '68-_Mets_tes_bas-1652737347709.jpeg'),
(799, 'Mets ta robe', 1, '69-_Mets_ta_robe-1652737347718.jpeg'),
(800, 'Mets tes souliers', 1, '70-_Mets_tes_souliers-1652737347728.jpeg'),
(801, 'Mets tes bottes', 1, '71-_Mets_tes_bottes-1652737347738.jpeg'),
(802, 'Habille-toi', 1, '72-_Habille-toi-1652737347758.jpeg'),
(803, 'Mets tes culottes', 1, '73-_Mets_tes_culottes-1652737347779.jpeg'),
(804, 'Mets ta camisole', 1, '74-_Mets_ta_camisole-1652737347787.jpeg'),
(805, 'Mets ton pantalon', 1, '75-_Mets_ton_pantalon-1652737347797.jpeg'),
(806, 'Mets tes chaussettes', 1, '76-_Mets_tes_chaussettes-1652737347806.jpeg'),
(807, 'Mets tes souliers', 1, '77-_Mets_tes_souliers-1652737347817.jpeg'),
(808, 'Détache tes souliers', 1, '78-_Detache_tes_souliers-1652737347860.jpeg'),
(809, 'Enlève ton chandail', 1, '79-_Enleve_ton_chandail-1652737347883.jpeg'),
(810, 'Enlève tes chaussettes', 1, '80-_Enleve_tes_chaussettes-1652737347900.jpeg'),
(811, 'Enlève ta casquette', 1, '81-_Enleve_ta_casquette-1652737347911.jpeg'),
(812, 'Enlève tes mitaines', 1, '82-_Enleve_tes_mitaines-1652737347939.jpeg'),
(813, 'Enlève ta tuque', 1, '83-_Enleve_ta_tuque-1652737347995.jpeg'),
(814, 'Enlève ton foulard', 1, '84-_Enleve_ton_foulard-1652737348010.jpeg'),
(815, 'Détache ton manteau', 1, '85-_Detache_ton_manteau-1652737348023.jpeg'),
(816, 'Enlève ton manteau', 1, '86-_Enleve_ton_manteau-1652737348036.jpeg'),
(817, 'Enlève tes bottes', 1, '87-_Enleve_tes_bottes-1652737348046.jpeg'),
(818, 'Enlève ton pantalon', 1, '88-_Enleve_ton_pantalon-1652737348083.jpeg'),
(819, 'Mets ton cache-col', 1, '89-_Mets_ton_cache-col-1652737348097.jpeg'),
(820, 'Mets tes lunettes', 1, '90-_Mets_tes_lunettes-1652737348137.jpeg'),
(821, 'Dormir', 1, '91-_Dormir-1652737348186.jpeg'),
(822, 'Fais ton lit', 1, '92-_Fais_ton_lit-1652737348219.jpeg'),
(823, 'Brosse tes dents', 1, '93-_Brosse_tes_dents-1652737348227.jpeg'),
(824, 'Histoire', 1, '94-_Histoire-1652737348275.jpeg'),
(825, 'Bonne nuit', 1, '95-_Bonne_nuit-1652737348297.jpeg'),
(826, 'Bonne nuit', 1, '96-_Bonne_nuit-1652737348316.jpeg'),
(827, 'Dormir', 1, '97-_Dormir-1652737348337.jpeg'),
(828, 'Maman dort', 1, '98-_Maman_dort-1652737348367.jpeg'),
(829, 'Fais ton lit', 1, '99-_Fais_ton_lit-1652737348394.jpeg'),
(830, 'Accroche ton pyjama', 1, '100-_Accroche_ton_pyjama-1652737348432.jpeg'),
(831, 'Fille de face', 2, '101-_Fille_de_face-1652737348456.jpeg'),
(832, 'Fille de dos', 2, '102-_Fille_de_dos-1652737348568.jpeg'),
(833, 'Garçon de face', 2, '103-_Garcon_de_face-1652737348729.jpeg'),
(834, 'Garçon de dos', 2, '104-_Garcon_de_dos-1652737348806.jpeg'),
(835, 'Cheveux', 2, '105-_Cheveux-1652737348852.jpeg'),
(836, 'Yeux', 2, '106-_Yeux-1652737348878.jpeg'),
(837, 'Nez', 2, '107-_Nez-1652737348901.jpeg'),
(838, 'Bouche', 2, '108-_Bouche-1652737349000.jpeg'),
(839, 'Langue', 2, '109-_Langue-1652737349034.jpeg'),
(840, 'Dents', 2, '110-_Dents-1652737349038.jpeg'),
(841, 'Oreille', 2, '111-_Oreille-1652737349091.jpeg'),
(842, 'Gorge', 2, '112-_Gorge-1652737349100.jpeg'),
(843, 'Poitrine', 2, '113-_Poitrine-1652737349129.jpeg'),
(844, 'Bras', 2, '114-_Bras-1652737349180.jpeg'),
(845, 'Épaule', 2, '115-_Epaule-1652737349201.jpeg'),
(846, 'Coude', 2, '116-_Coude-1652737349212.jpeg'),
(847, 'poignet', 2, '117-_poignet-1652737349245.jpeg'),
(848, 'Main', 2, '118-_Main-1652737349261.jpeg'),
(849, 'Pouce', 2, '119-_Pouce-1652737349285.jpeg'),
(850, 'Doigt', 2, '120-_Doigt-1652737349302.jpeg'),
(851, 'Ventre', 2, '121-_Ventre-1652737349316.jpeg'),
(852, 'Nombril', 2, '122-_Nombril-1652737349334.jpeg'),
(853, 'Dos', 2, '123-_Dos-1652737349359.jpeg'),
(854, 'Fesses', 2, '124-_Fesses-1652737349380.jpeg'),
(855, 'Pénis', 2, '125-_Penis-1652737349412.jpeg'),
(856, 'Vulve', 2, '126-_Vulve-1652737349431.jpeg'),
(857, 'Jambe', 2, '127-_Jambe-1652737349455.jpeg'),
(858, 'Cuisse', 2, '128-_Cuisse-1652737349476.jpeg'),
(859, 'Genoux', 2, '129-_Genoux-1652737349796.jpeg'),
(860, 'Mollet', 2, '130-_Mollet-1652737349848.jpeg'),
(861, 'Cheville', 2, '131-_Cheville-1652737349882.jpeg'),
(862, 'Pied', 2, '132-_Pied-1652737349894.jpeg'),
(863, 'Orteils', 2, '133-_Orteils-1652737349918.jpeg'),
(864, 'Montrer où j\'ai mal', 18, '134-_Montrer_ou_j\'ai_mal-1652737349955.jpeg'),
(865, 'Montrer où j\'ai mal', 18, '135-_Montrer_ou_j\'ai_mal-1652737349968.jpeg'),
(866, 'Mal à la tête', 18, '136-_Mal_a_la_tete-1652737349983.jpeg'),
(867, 'Mal aux oreilles', 18, '137-_Mal_aux_oreilles-1652737350004.jpeg'),
(868, 'Mal aux dents', 18, '138-_Mal_aux_dents-1652737350049.jpeg'),
(869, 'Mal à la gorge', 18, '139-_Mal_a_la_gorge-1652737350066.jpeg'),
(870, 'Mal à la poitrine', 18, '140-_Mal_a_la_poitrine-1652737350090.jpeg'),
(871, 'Mal au bras', 18, '141-_Mal_au_bras-1652737350117.jpeg'),
(872, 'Mal à la main', 18, '142-_Mal_a_la_main-1652737350134.jpeg'),
(873, 'Mal au ventre', 18, '143-_Mal_au_ventre-1652737350149.jpeg'),
(874, 'Mal au dos', 18, '144-_Mal_au_dos-1652737350184.jpeg'),
(875, 'Mal quand je fais pipi', 18, '145-_Mal_quand_je_fais_pipi-1652737350212.jpeg'),
(876, 'Mal au derrière', 18, '146-_Mal_au_derriere-1652737350233.jpeg'),
(877, 'Mal à la jambe', 18, '147-_Mal_a_la_jambe-1652737350255.jpeg'),
(878, 'Mal aux pieds', 18, '148-_Mal_aux_pieds-1652737350277.jpeg'),
(879, 'Malade', 18, '149-_Malade-1652737350291.jpeg'),
(880, 'Étourdi', 18, '150-_Etourdi-1652737350341.jpeg'),
(881, 'Mal au coeur', 18, '151-_Mal_au_coeur-1652737350354.jpeg'),
(882, 'Vomir', 18, '152-_Vomir-1652737350391.jpeg'),
(883, 'Je n\'ai pas mal', 18, '153-_Je_n\'ai_pas_mal-1652737350425.jpeg'),
(884, 'Je me sens bizarre', 18, '154-_Je_me_sens_bizarre-1652737350451.jpeg'),
(885, 'J\'ai un peu mal', 18, '155-_J\'ai_un_peu_mal-1652737350479.jpeg'),
(886, 'J\'ai mal', 18, '156-_J\'ai_mal-1652737350508.jpeg'),
(887, 'J\'ai très mal', 18, '157-_J\'ai_tres_mal-1652737350542.jpeg'),
(888, 'J\'ai trop mal', 18, '158-_J\'ai_trop_mal-1652737350577.jpeg'),
(889, 'Hôpital', 18, '159-_Hopital-1652737350645.jpeg'),
(890, 'Salle d\'attente', 18, '160-_Salle_d\'attente-1652737350674.jpeg'),
(891, 'Médecin', 18, '161-_Medecin-1652737350728.jpeg'),
(892, 'Parler avec le médecin', 18, '162-_Parler_avec_le_medecin-1652737350736.jpeg'),
(893, 'Prendre la pression', 18, '163-_Prendre_la_pression-1652737350814.jpeg'),
(894, 'Réflexes', 18, '164-_Reflexes-1652737350950.jpeg'),
(895, 'Prendre la température', 18, '165-_Prendre_la_temperature-1652737351030.jpeg'),
(896, 'Prise de sang', 18, '166-_Prise_de_sang-1652737351049.jpeg'),
(897, 'Rayons X', 18, '167-_Rayons_X-1652737351073.jpeg'),
(898, 'Soluté', 18, '168-_Solute-1652737351088.jpeg'),
(899, 'Dormir à l\'hopital', 18, '169-_Dormir_a_l\'hopital-1652737351126.jpeg'),
(900, 'Pharmacien', 18, '170-_Pharmacien-1652737351155.jpeg'),
(901, 'Médicaments', 18, '171-_Medicaments-1652737351184.jpeg'),
(902, 'Sirop', 18, '172-_Sirop-1652737351237.jpeg'),
(903, 'Inhalateur', 18, '173-_Inhalateur-1652737351258.jpeg'),
(904, 'Pansement', 18, '174-_Pansement-1652737351281.jpeg'),
(905, 'Diffuseur', 18, '175-_Diffuseur-1652737351298.jpeg'),
(906, 'Diffuseur', 18, '176-_Diffuseur-1652737351345.jpeg'),
(907, 'Huiles essentielles', 18, '177-_Huiles_essentielles-1652737351388.jpeg'),
(908, 'Optométriste', 18, '178-_Optometriste-1652737351406.jpeg'),
(909, 'Orthophoniste', 18, '179-_Orthophoniste-1652737351448.jpeg'),
(910, 'Psychologue', 18, '180-_Psychologue-1652737351471.jpeg'),
(911, 'En santé', 18, '181-_En_sante-1652737351488.jpeg'),
(912, 'Ça goûte bon', 3, '182-_Ca_goute_bon-1652737351518.jpeg'),
(913, 'Ça goûte mauvais', 3, '183-_Ca_goute_mauvais-1652737351536.jpeg'),
(914, 'Viens manger!', 3, '184-_Viens_manger!-1652737351554.jpeg'),
(915, 'Mange', 3, '185-_Mange-1652737351578.jpeg'),
(916, 'Bois', 3, '186-_Bois-1652737351599.jpeg'),
(917, 'C\'est terminé!', 3, '187-_C\'est_termine!-1652737351623.jpeg'),
(918, 'Assiette', 3, '188-_Assiette-1652737351660.jpeg'),
(919, 'Bol', 3, '189-_Bol-1652737351689.jpeg'),
(920, 'Tasse', 3, '190-_Tasse-1652737351708.jpeg'),
(921, 'Verre', 3, '191-_Verre-1652737351728.jpeg'),
(922, 'Ustensiles', 3, '192-_Ustensiles-1652737351741.jpeg'),
(923, 'Couteau', 3, '193-_Couteau-1652737351752.jpeg'),
(924, 'Cuillère', 3, '194-_Cuillere-1652737351768.jpeg'),
(925, 'Grosse cuillère', 3, '195-_Grosse_cuillere-1652737351792.jpeg'),
(926, 'Petite cuillère', 3, '196-_Petite_cuillere-1652737351808.jpeg'),
(927, 'Fourchette', 3, '197-_Fourchette-1652737351825.jpeg'),
(928, 'Grosse fourchette', 3, '198-_Grosse_fourchette-1652737351838.jpeg'),
(929, 'Petite fourchette', 3, '199-_Petite_fourchette-1652737351853.jpeg'),
(930, 'Ouvrir', 3, '200-_Ouvrir-1652737351888.jpeg'),
(931, 'Breuvage chaud', 4, '201-_Breuvage_chaud-1652737351926.jpeg'),
(932, 'Eau', 4, '202-_Eau-1652737351949.jpeg'),
(933, 'Lait', 4, '203-_Lait-1652737351970.jpeg'),
(934, 'Jus d\'orange', 4, '204-_Jus_d\'orange-1652737351982.jpeg'),
(935, 'Jus de raisin', 4, '205-_Jus_de_raisin-1652737352004.jpeg'),
(936, 'Jus de pomme', 4, '206-_Jus_de_pomme-1652737352018.jpeg'),
(937, 'Fruits', 4, '207-_Fruits-1652737352036.jpeg'),
(938, 'Abricots', 4, '208-_Abricots-1652737352108.jpeg'),
(939, 'Ananas', 4, '209-_Ananas-1652737352160.jpeg'),
(940, 'Banane', 4, '210-_Banane-1652737352265.jpeg'),
(941, 'Bleuets', 4, '211-_Bleuets-1652737352488.jpeg'),
(942, 'Cerises', 4, '212-_Cerises-1652737352521.jpeg'),
(943, 'Citron', 4, '213-_Citron-1652737352568.jpeg'),
(944, 'Fraises', 4, '214-_Fraises-1652737352627.jpeg'),
(945, 'Framboises', 4, '215-_Framboises-1652737352669.jpeg'),
(946, 'Kiwi', 4, '216-_Kiwi-1652737352714.jpeg'),
(947, 'Melon d\'eau', 4, '217-_Melon_d\'eau-1652737352780.jpeg'),
(948, 'Orange', 4, '218-_Orange-1652737352813.jpeg'),
(949, 'Pêche', 4, '219-_Peche-1652737352848.jpeg'),
(950, 'Poire', 4, '220-_Poire-1652737352902.jpeg'),
(951, 'Pomme jaune', 4, '221-_Pomme_jaune-1652737352929.jpeg'),
(952, 'Pomme rouge', 4, '222-_Pomme_rouge-1652737352955.jpeg'),
(953, 'Pomme verte', 4, '223-_Pomme_verte-1652737352988.jpeg'),
(954, 'Prune', 4, '224-_Prune-1652737353015.jpeg'),
(955, 'Raisins rouges', 4, '225-_Raisins_rouges-1652737353050.jpeg'),
(956, 'Raisins verts', 4, '226-_Raisins_verts-1652737353081.jpeg'),
(957, 'Légumes', 4, '227-_Legumes-1652737353115.jpeg'),
(958, 'Brocoli', 4, '228-_Brocoli-1652737353138.jpeg'),
(959, 'Carottes', 4, '229-_Carottes-1652737353163.jpeg'),
(960, 'Céleri', 4, '230-_Celeri-1652737353215.jpeg'),
(961, 'Champignon', 4, '231-_Champignon-1652737353259.jpeg'),
(962, 'Chou-fleur', 4, '232-_Chou-fleur-1652737353282.jpeg'),
(963, 'Concombre', 4, '233-_Concombre-1652737353296.jpeg'),
(964, 'Endives', 4, '234-_Endives-1652737353372.jpeg'),
(965, 'Fèves', 4, '235-_Feves-1652737353412.jpeg'),
(966, 'Fèves germées', 4, '236-_Feves_germees-1652737353422.jpeg'),
(967, 'Maïs', 4, '237-_Mais-1652737353442.jpeg'),
(968, 'Pois mange-tout', 4, '238-_Pois_mange-tout-1652737353454.jpeg'),
(969, 'Poivron rouge', 4, '239-_Poivron_rouge-1652737353464.jpeg'),
(970, 'Poivron vert', 4, '240-_Poivron_vert-1652737353476.jpeg'),
(971, 'Radis', 4, '241-_Radis-1652737353491.jpeg'),
(972, 'Laitue', 4, '242-_Laitue-1652737353501.jpeg'),
(973, 'Tomates', 4, '243-_Tomates-1652737353547.jpeg'),
(974, 'Soupe', 4, '244-_Soupe-1652737353612.jpeg'),
(975, 'Pomme de terre au four', 4, '245-_Pomme_de_terre_au_four-1652737353786.jpeg'),
(976, 'Pomme de terre-cubes', 4, '246-_Pomme_de_terre-cubes-1652737353822.jpeg'),
(977, 'Frites', 4, '247-_Frites-1652737353847.jpeg'),
(978, 'Purée', 4, '248-_Puree-1652737353867.jpeg'),
(979, 'Pain', 4, '249-_Pain-1652737353901.jpeg'),
(980, 'Croissant', 4, '250-_Croissant-1652737353934.jpeg'),
(981, 'Hamburger', 4, '251-_Hamburger-1652737353952.jpeg'),
(982, 'Hot dog', 4, '252-_Hot_dog-1652737354062.jpeg'),
(983, 'Pizza', 4, '253-_Pizza-1652737354092.jpeg'),
(984, 'Pâtes', 4, '254-_Pates-1652737354110.jpeg'),
(985, 'Poulet', 4, '255-_Poulet-1652737354125.jpeg'),
(986, 'Repas chaud', 4, '256-_Repas_chaud-1652737354143.jpeg'),
(987, 'Repas froid', 4, '257-_Repas_froid-1652737354170.jpeg'),
(988, 'Biscuits', 4, '258-_Biscuits-1652737354192.jpeg'),
(989, 'Muffin', 4, '259-_Muffin-1652737354229.jpeg'),
(990, 'Gâteau', 4, '260-_Gateau-1652737354248.jpeg'),
(991, 'Bonbons', 4, '261-_Bonbons-1652737354312.jpeg'),
(992, 'Guimauves', 4, '262-_Guimauves-1652737354338.jpeg'),
(993, 'Chips', 4, '263-_Chips-1652737354376.jpeg'),
(994, 'Chocolat', 4, '264-_Chocolat-1652737354390.jpeg'),
(995, 'Tarte', 4, '265-_Tarte-1652737354404.jpeg'),
(996, 'Tarte aux fruits', 4, '266-_Tarte_aux_fruits-1652737354415.jpeg'),
(997, 'Sucette glacée', 4, '267-_Sucette_glacee-1652737354447.jpeg'),
(998, 'Cornet', 4, '268-_Cornet-1652737354465.jpeg'),
(999, 'Collation', 4, '269-_Collation-1652737354478.jpeg'),
(1000, 'Fromage', 4, '270-_Fromage-1652737354514.jpeg'),
(1001, 'Noix', 4, '271-_Noix-1652737354544.jpeg'),
(1002, 'Repas', 4, '272-_Repas-1652737354587.jpeg'),
(1003, 'Mets la table', 5, '273-_Mets_la_table-1652737354608.jpeg'),
(1004, 'Dessers la table', 5, '274-_Dessers_la_table-1652737354614.jpeg'),
(1005, 'Distribue la collation', 5, '275-_Distribue_la_collation-1652737354625.jpeg'),
(1006, 'Distribue les brosses', 5, '276-_Distribue_les_brosses_-1652737354666.jpeg'),
(1007, 'Distribue le lait', 5, '277-_Distribue_le_lait-1652737354679.jpeg'),
(1008, 'Porte-poussière', 5, '278-_Porte-poussiere-1652737354689.jpeg'),
(1009, 'Balaie', 5, '279-_Balaie-1652737354703.jpeg'),
(1010, 'Passe l\'aspirateur', 5, '280-_Passe_l\'aspirateur-1652737354721.jpeg'),
(1011, 'Époussette', 5, '281-_Epoussette-1652737354726.jpeg'),
(1012, 'Arrose les plantes', 5, '282-_Arrose_les_plantes-1652737354826.jpeg'),
(1013, 'Distribue les livres', 5, '283-_Distribue_les_livres-1652737354834.jpeg'),
(1014, 'Range les jouets', 5, '284-_Range_les_jouets-1652737355214.jpeg'),
(1015, 'Range ton matelas', 5, '285-_Range_ton_matelas-1652737355460.jpeg'),
(1016, 'Range ta couverture', 5, '286-_Range_ta_couverture-1652737355760.jpeg'),
(1017, 'Dans le panier à linge', 5, '287-_Dans_le_panier_a_linge-1652737355959.jpeg'),
(1018, 'Dans la laveuse', 5, '288-_Dans_la_laveuse-1652737355984.jpeg'),
(1019, 'Dans la laveuse', 5, '289-_Dans_la_laveuse-1652737356024.jpeg'),
(1020, 'Sors le linge', 5, '290-_Sors_le_linge-1652737356047.jpeg'),
(1021, 'Sors le linge', 5, '291-_Sors_le_linge-1652737356067.jpeg'),
(1022, 'Range tes vêtements', 5, '292-_Range_tes_vetements-1652737356104.jpeg'),
(1023, 'Essuie la toilette', 5, '293-_Essuie_la_toilette-1652737356138.jpeg'),
(1024, 'Ouvre les rideaux', 5, '294-_Ouvre_les_rideaux-1652737356158.jpeg'),
(1025, 'Ouvre les stores', 5, '295-_Ouvre_les_stores-1652737356180.jpeg'),
(1026, 'Ouvre les stores', 5, '296-_Ouvre_les_stores-1652737356194.jpeg'),
(1027, 'Bousculer', 5, '297-_Bousculer-1652737356217.jpeg'),
(1028, 'Étrangler', 5, '298-_Etrangler-1652737356239.jpeg'),
(1029, 'Coup de poing', 5, '299-_Coup_de_poing-1652737356254.jpeg'),
(1030, 'Coup de pied', 5, '300-_Coup_de_pied-1652737356276.jpeg'),
(1031, 'Taper', 5, '301-_Taper-1652737356618.jpeg'),
(1032, 'Déranger', 5, '302-_Deranger-1652737356637.jpeg'),
(1033, 'Se cogner la tête', 5, '303-_Se_cogner_la_tete-1652737356658.jpeg'),
(1034, 'Se cogner la tête', 5, '304-_Se_cogner_la_tete-1652737356696.jpeg'),
(1035, 'Se frapper sur la tête', 5, '305-_Se_frapper_sur_la_tete-1652737356725.jpeg'),
(1036, 'Se rouler par terre', 5, '306-_Se_rouler_par_terre-1652737356752.jpeg'),
(1037, 'Dire des mots méchants', 5, '307-_Dire_des_mots_mechants-1652737356762.jpeg'),
(1038, 'Rouspéter', 5, '308-_Rouspeter-1652737356783.jpeg'),
(1039, 'Briser les objets', 5, '309-_Briser_les_objets-1652737356793.jpeg'),
(1040, 'Lancer par la fenêtre', 5, '310-_Lancer_par_la_fenetre-1652737356805.jpeg'),
(1041, 'Lancer des objets', 5, '311-_Lancer_des_objets-1652737356831.jpeg'),
(1042, 'Pipi dans l\'herbe', 5, '312-_Pipi_dans_l\'herbe-1652737356869.jpeg'),
(1043, 'Jouer avec son pénis', 5, '313-_Jouer_avec_son_penis-1652737356895.jpeg'),
(1044, 'Sortir son pénis', 5, '314-_Sortir_son_penis-1652737356905.jpeg'),
(1045, 'Se masturber', 5, '315-_Se_masturber-1652737356947.jpeg'),
(1046, 'Main dans les fesses', 5, '316-_Main_dans_les_fesses-1652737356993.jpeg'),
(1047, 'Dans l\'escalier', 5, '317-_Dans_l\'escalier-1652737357016.jpeg'),
(1048, 'Prendre sans demander', 5, '318-_Prendre_sans_demander-1652737357038.jpeg'),
(1049, 'Partager les jouets', 5, '319-_Partager_les_jouets-1652737357087.jpeg'),
(1050, 'Jouer avec un ami', 5, '320-_Jouer_avec_un_ami-1652737357116.jpeg'),
(1051, 'Assieds-toi en indien', 5, '321-_Assieds-toi_en_indien-1652737357132.jpeg'),
(1052, 'Lève la main', 5, '322-_Leve_la_main-1652737357150.jpeg'),
(1053, 'Lève la main', 5, '323-_Leve_la_main-1652737357170.jpeg'),
(1054, 'Tour de rôle', 5, '324-_Tour_de_role-1652737357190.jpeg'),
(1055, 'Attends!', 5, '325-_Attends!-1652737357203.jpeg'),
(1056, 'Respire', 5, '326-_Respire-1652737357235.jpeg'),
(1057, 'Tiens la main', 5, '327-_Tiens_la_main-1652737357262.jpeg'),
(1058, 'Demande', 5, '328-_Demande_-1652737357272.jpeg'),
(1059, 'Demande de l\'aide', 5, '329-_Demande_de_l\'aide-1652737357283.jpeg'),
(1060, 'Demande de l\'aide', 5, '330-_Demande_de_l\'aide-1652737357324.jpeg'),
(1061, 'Vouloir être seul', 5, '331-_Vouloir_etre_seul-1652737357375.jpeg'),
(1062, 'Regarde l\'autre', 5, '332-_Regarde_l\'autre-1652737357401.jpeg'),
(1063, 'Respecte l\'espace', 5, '333-__Respecte_l\'espace-1652737357414.jpeg'),
(1064, 'Adulte qui parle', 5, '334-_Adulte_qui_parle-1652737357428.jpeg'),
(1065, 'Parler', 5, '335-_Parler-1652737357438.jpeg'),
(1066, 'Parler', 5, '336-_Parler-1652737357454.jpeg'),
(1067, 'S\'intéresser', 5, '337-_S\'interesser-1652737357472.jpeg'),
(1068, 'Comprendre', 5, '338-_Comprendre-1652737357512.jpeg'),
(1069, 'Poser une question', 5, '339-_Poser_une_question-1652737357541.jpeg'),
(1070, 'Poser une question', 5, '340-_Poser_une_question-1652737357566.jpeg'),
(1071, 'Enfants qui discutent', 5, '341-_Enfants_qui_discutent-1652737357588.jpeg'),
(1072, 'Enfants qui discutent', 5, '342-_Enfants_qui_discutent-1652737357607.jpeg'),
(1073, 'Voici ce que j\'ai fait', 5, '343-_Voici_ce_que_j\'ai_fait-1652737357621.jpeg'),
(1074, 'Bonjour', 6, '344-_Bonjour-1652737357640.jpeg'),
(1075, 'Allô', 6, '345-_Allo-1652737357648.jpeg'),
(1076, 'S\'il te plaît', 6, '346-_S\'il_te_plait-1652737357706.jpeg'),
(1077, 'Merci', 6, '347-_Merci-1652737357800.jpeg'),
(1078, 'Solution', 0, '348-_Solution-1652737357936.jpeg'),
(1079, 'Amis', 7, '349-_Amis-1652737358228.jpeg'),
(1080, 'Amies', 7, '350-_Amies-1652737358255.jpeg'),
(1081, 'Amoureux', 7, '351-_Amoureux-1652737358272.jpeg'),
(1082, 'Bisou d\'amoureux', 7, '352-_Bisou_d\'amoureux-1652737358305.jpeg'),
(1083, 'Bisou envolé', 7, '353-_Bisou_envole-1652737358322.jpeg'),
(1084, 'Câlin de papa', 7, '354-_Calin_de_papa-1652737358354.jpeg'),
(1085, 'Câlin de grand-maman', 7, '355-_Calin_de_grand-maman-1652737358387.jpeg'),
(1086, 'Fière de toi', 8, '356-_Fiere_de_toi-1652737358420.jpeg'),
(1087, 'Drôle', 8, '357-_Drole-1652737358438.jpeg'),
(1088, 'Excité', 8, '358-_Excite-1652737358468.jpeg'),
(1089, 'Heureux', 8, '359-_Heureux-1652737358486.jpeg'),
(1090, 'Calme', 8, '360-_Calme-1652737358507.jpeg'),
(1091, 'Timide', 8, '361-_Timide-1652737358528.jpeg'),
(1092, 'Indécis', 8, '362-_Indecis-1652737358549.jpeg'),
(1093, 'Fatigué', 8, '363-_Fatigue-1652737358572.jpeg'),
(1094, 'Surpris', 8, '364-_Surpris-1652737358589.jpeg'),
(1095, 'Déçu', 8, '365-_Decu-1652737358630.jpeg'),
(1096, 'Anxieux', 8, '366-_Anxieux-1652737358640.jpeg'),
(1097, 'Contrarié', 8, '367-_Contrarie-1652737358653.jpeg'),
(1098, 'Boudeur', 8, '368-_Boudeur-1652737358669.jpeg'),
(1099, 'Méprisant', 8, '369-_Meprisant-1652737358715.jpeg'),
(1100, 'Entêté', 8, '370-_Entete-1652737358738.jpeg'),
(1101, 'Fâché', 8, '371-_Fache-1652737358757.jpeg'),
(1102, 'Frustré', 8, '372-_Frustre-1652737358772.jpeg'),
(1103, 'Apeuré', 8, '373-_Apeure-1652737358787.jpeg'),
(1104, 'Triste', 8, '374-_Triste-1652737358803.jpeg'),
(1105, 'Mélancolique', 8, '375-_Melancolique-1652737358815.jpeg'),
(1106, 'Consoler', 9, '376-_Consoler-1652737358829.jpeg'),
(1107, 'Aller', 9, '377-_Aller-1652737358855.jpeg'),
(1108, 'Applaudir', 9, '378-_Applaudir-1652737358860.jpeg'),
(1109, 'Boucher ses oreilles', 9, '379-_Boucher_ses_oreilles-1652737358874.jpeg'),
(1110, 'Chatouiller', 9, '380-_Chatouiller-1652737358884.jpeg'),
(1111, 'Croiser ses bras', 9, '381-_Croiser_ses_bras-1652737358933.jpeg'),
(1112, 'Être', 9, '382-_Etre-1652737358937.jpeg'),
(1113, 'Faire l\'avion', 9, '383-_Faire_l\'avion-1652737358971.jpeg'),
(1114, 'Fermer ses yeux', 9, '384-_Fermer_ses_yeux-1652737358991.jpeg'),
(1115, 'Lancer', 9, '385-_Lancer-1652737359005.jpeg'),
(1116, 'Marcher', 9, '386-_Marcher-1652737359268.jpeg'),
(1117, 'Montrer', 9, '387-_Montrer-1652737359288.jpeg'),
(1118, 'Regarder', 9, '388-_Regarder-1652737359303.jpeg'),
(1119, 'Regarder', 9, '389-_Regarder-1652737359327.jpeg'),
(1120, 'Se coucher', 9, '390-_Se_coucher-1652737359338.jpeg'),
(1121, 'Vouloir', 9, '391-_Vouloir-1652737359361.jpeg'),
(1122, 'Avec', 10, '392-_Avec-1652737359369.jpeg'),
(1123, 'Avec les autres', 10, '393-_Avec_les_autres-1652737359408.jpeg'),
(1124, 'Encore', 10, '394-_Encore-1652737359428.jpeg'),
(1125, 'Où', 10, '395-_Ou-1652737359440.jpeg'),
(1126, 'Quand', 10, '396-_Quand-1652737359465.jpeg'),
(1127, 'Je', 11, '397-_Je-1652737359484.jpeg'),
(1128, 'Tu', 11, '398-_Tu-1652737359500.jpeg'),
(1129, 'Il', 11, '399-_Il-1652737359514.jpeg'),
(1130, 'Nous', 11, '400-_Nous-1652737359524.jpeg'),
(1131, 'Vous', 11, '401-_Vous-1652737359535.jpeg'),
(1132, 'Ils', 11, '402-_Ils-1652737359550.jpeg'),
(1133, 'Ils', 11, '403-_Ils-1652737359559.jpeg'),
(1134, 'Elles', 11, '404-_Elles-1652737359571.jpeg'),
(1135, 'Elles', 11, '405-_Elles-1652737359591.jpeg'),
(1136, 'Moi', 11, '406-_Moi-1652737359602.jpeg'),
(1137, 'Toi', 11, '407-_Toi-1652737359613.jpeg'),
(1138, 'À moi', 11, '408-_A_moi-1652737359618.jpeg'),
(1139, 'À moi', 11, '409-_A_moi-1652737359649.jpeg'),
(1140, 'Maison', 12, '410-_Maison-1652737359689.jpeg'),
(1141, 'École', 12, '411-_Ecole-1652737359736.jpeg'),
(1142, 'Arrivée à la garderie', 12, '412-_Arrivee_a_la_garderie-1652737359779.jpeg'),
(1143, 'Départ de la garderie', 12, '413-_Depart_de_la_garderie-1652737359796.jpeg'),
(1144, 'Camp d\'été', 12, '414-_Camp_d\'ete-1652737359818.jpeg'),
(1145, 'Épicerie', 12, '415-_Epicerie-1652737359852.jpeg'),
(1146, 'Magasin', 12, '416-_Magasin-1652737359870.jpeg'),
(1147, 'École pour chien', 12, '417-_Ecole_pour_chien-1652737359893.jpeg'),
(1148, 'Accessoires pour chien', 13, '418-_Accessoires_pour_chien-1652737360068.jpeg'),
(1149, 'Câlin de chien', 13, '419-_Calin_de_chien-1652737360085.jpeg'),
(1150, 'Chien', 13, '420-_Chien-1652737360098.jpeg'),
(1151, 'Famille', 13, '421-_Famille-1652737360138.jpeg'),
(1152, 'Papa', 13, '422-_Papa-1652737360172.jpeg'),
(1153, 'Homme', 13, '423-_Homme-1652737360182.jpeg'),
(1154, 'Maman', 13, '424-_Maman-1652737360189.jpeg'),
(1155, 'Femme', 13, '425-_Femme-1652737360201.jpeg'),
(1156, 'Soeur', 13, '426-_Soeur-1652737360291.jpeg'),
(1157, 'Fille', 13, '427-_Fille-1652737360330.jpeg'),
(1158, 'Frère', 13, '428-_Frere-1652737360346.jpeg'),
(1159, 'Garçon', 13, '429-_Garcon-1652737360363.jpeg'),
(1160, 'Bébé', 13, '430-_Bebe-1652737360368.jpeg'),
(1161, 'Bébé', 13, '431-_Bebe-1652737360471.jpeg'),
(1162, 'Grand-maman', 13, '432-_Grand-maman-1652737360477.jpeg'),
(1163, 'Femme', 13, '433-_Femme-1652737360649.jpeg'),
(1164, 'Mains sur la tête', 9, '434-_Mains_sur_la_tete-1652737360668.jpeg'),
(1165, 'Mains sur les épaules', 9, '435-_Mains_sur_les_epaules-1652737360682.jpeg'),
(1166, 'Mains sur les cuisses', 9, '436-_Mains_sur_les_cuisses-1652737360717.jpeg'),
(1167, 'Paume contre paume', 9, '437-_Paume_contre_paume-1652737360725.jpeg'),
(1168, 'Serre ton doigt', 9, '438-_Serre_ton_doigt-1652737360742.jpeg'),
(1169, 'Pousse sur ta chaise', 9, '439-_Pousse_sur_ta_chaise-1652737360762.jpeg'),
(1170, 'Souffle dans ta main', 9, '440-_Souffle_dans_ta_main-1652737360773.jpeg'),
(1171, 'Frotte tes bras', 9, '441-_Frotte_tes_bras-1652737360787.jpeg'),
(1172, 'Frotte tes cuisses', 9, '442-_Frotte_tes_cuisses-1652737360801.jpeg'),
(1173, 'Bouge tes mains', 9, '443-_Bouge_tes_mains-1652737360810.jpeg'),
(1174, 'Bouge tes pieds', 9, '444-_Bouge_tes_pieds-1652737360885.jpeg'),
(1175, 'Fais beuh!', 9, '445-_Fais_beuh!-1652737360896.jpeg'),
(1176, 'Saute en kangourou', 9, '446-_Saute_en_kangourou-1652737360906.jpeg'),
(1177, 'Saute en grenouille', 9, '447-_Saute_en_grenouille-1652737360916.jpeg'),
(1178, 'Pousse sur le mur', 9, '448-_Pousse_sur_le_mur-1652737360929.jpeg'),
(1179, 'Exercices physiques', 14, '449-_Exercices_physiques-1652737360940.jpeg'),
(1180, 'Sauter', 14, '450-_Sauter-1652737360952.jpeg'),
(1181, 'Blocs et figurines', 14, '451-_Blocs_et_figurines-1652737360967.jpeg'),
(1182, 'Jeux symboliques', 14, '452-_Jeux_symboliques-1652737360983.jpeg'),
(1183, 'Cuisinette', 14, '453-_Cuisinette-1652737361086.jpeg'),
(1184, 'Trousse médicale', 14, '454-_Trousse_medicale-1652737361120.jpeg'),
(1185, 'Tête à coiffer', 14, '455-_Tete_a_coiffer-1652737361133.jpeg'),
(1186, 'Marionnettes', 14, '456-_Marionnettes-1652737361148.jpeg'),
(1187, 'Peinture', 14, '457-_Peinture-1652737361159.jpeg'),
(1188, 'Expression plastique', 14, '458-_Expression_plastique-1652737361171.jpeg'),
(1189, 'Menuiserie', 14, '459-_Menuiserie-1652737361187.jpeg'),
(1190, 'Manipulations', 14, '460-_Manipulations-1652737361202.jpeg'),
(1191, 'Coin lecture', 14, '461-_Coin_lecture-1652737361217.jpeg'),
(1192, 'Lecture', 14, '462-_Lecture-1652737361258.jpeg'),
(1193, 'Jeux calmes', 14, '463-_Jeux_calmes-1652737361270.jpeg'),
(1194, 'Jeux calmes', 14, '464-_Jeux_calmes-1652737361281.jpeg'),
(1195, 'Enfilage', 14, '465-_Enfilage-1652737361298.jpeg'),
(1196, 'Musique', 14, '466-_Musique-1652737361309.jpeg'),
(1197, 'Danse', 14, '467-_Danse-1652737361348.jpeg'),
(1198, 'Psychomotricité', 14, '468-_Psychomotricite-1652737361360.jpeg'),
(1199, 'Ballon d\'entraînement', 14, '469-_Ballon_d\'entrainement-1652737361377.jpeg'),
(1200, 'Bac à eau', 14, '470-_Bac_a_eau-1652737361390.jpeg'),
(1201, 'Bac à sable', 14, '471-_Bac_a_sable-1652737361401.jpeg'),
(1202, 'Bac à riz', 14, '472-_Bac_a_riz-1652737361424.jpeg'),
(1203, 'Sciences', 14, '473-_Sciences-1652737361435.jpeg'),
(1204, 'Ordinateur', 14, '474-_Ordinateur-1652737361450.jpeg'),
(1205, 'Atelier de groupe', 14, '475-_Atelier_de_groupe-1652737361472.jpeg'),
(1206, 'Travail de groupe', 14, '476-_Travail_de_groupe-1652737361487.jpeg'),
(1207, 'Apprentissages', 14, '477-_Apprentissages-1652737361500.jpeg'),
(1208, 'Écriture', 14, '478-_Ecriture-1652737361525.jpeg'),
(1209, 'Travail autonome', 14, '479-_Travail_autonome-1652737361553.jpeg'),
(1210, 'Atelier de travail', 14, '480-_Atelier_de_travail-1652737361564.jpeg'),
(1211, 'Boîte à surprises', 14, '481-_Boite_a_surprises-1652737361618.jpeg'),
(1212, 'Joue en silence', 14, '482-_Joue_en_silence-1652737361660.jpeg'),
(1213, 'Joue en silence', 14, '483-_Joue_en_silence-1652737361737.jpeg'),
(1214, 'Détente', 14, '484-_Detente-1652737361747.jpeg'),
(1215, 'Faire le train', 14, '485-_Faire_le_train-1652737361763.jpeg'),
(1216, 'Récréation', 14, '486-_Recreation-1652737361783.jpeg'),
(1217, 'Piscine publique', 14, '487-_Piscine_publique-1652737361797.jpeg'),
(1218, 'À la pêche', 14, '488-_A_la_peche-1652737361808.jpeg'),
(1219, 'Temps libre', 14, '489-_Temps_libre-1652737361829.jpeg'),
(1220, 'Je n\'ai pas le picto', 0, '490-_Je_n\'ai_pas_le_picto-1652737361840.jpeg'),
(1221, 'Père Noël', 0, '491-__Pere_Noel-1652737361849.jpeg'),
(1222, 'Décore le sapin', 0, '492-_Decore_le_sapin-1652737362073.jpeg'),
(1223, 'Sapin de Noël', 0, '493-_Sapin_de_Noel-1652737362174.jpeg'),
(1224, 'Jouets', 15, '494-_Jouets-1652737362209.jpeg'),
(1225, 'Poupée', 15, '495-_Poupee-1652737362259.jpeg'),
(1226, 'Barbie', 15, '496-_Barbie-1652737362270.jpeg'),
(1227, 'Monsieur Patate', 15, '497-_Monsieur_Patate-1652737362281.jpeg'),
(1228, 'Canard en peluche', 15, '498-_Canard_en_peluche-1652737362302.jpeg'),
(1229, 'Coccinelle en peluche', 15, '499-_Coccinelle_en_peluche-1652737362341.jpeg'),
(1230, 'Grenouille en peluche', 15, '500-_Grenouille_en_peluche-1652737362380.jpeg'),
(1231, 'Animaux lourds', 15, '501-_Animaux_lourds-1652737362422.jpeg'),
(1232, 'Lézard lourd', 15, '502-_Lezard_lourd-1652737362449.jpeg'),
(1233, 'Serpent lourd', 15, '503-_Serpent_lourd-1652737362517.jpeg'),
(1234, 'Balles tactiles', 15, '504-_Balles_tactiles-1652737362583.jpeg'),
(1235, 'Balle tactile', 15, '505-_Balle_tactile-1652737362598.jpeg'),
(1236, 'Balle tactile', 15, '506-_Balle_tactile-1652737362603.jpeg'),
(1237, 'Balle tactile', 15, '507-_Balle_tactile-1652737362635.jpeg'),
(1238, 'Bateau', 15, '508-_Bateau-1652737362643.jpeg'),
(1239, 'Sciences', 15, '509-_Sciences-1652737362658.jpeg'),
(1240, 'Livres', 15, '510-_Livres-1652737362663.jpeg'),
(1241, 'Quilles', 15, '511-_Quilles-1652737362674.jpeg'),
(1242, 'Cartes à jouer', 15, '512-_Cartes_a_jouer-1652737362684.jpeg'),
(1243, 'Bijoux', 16, '513-_Bijoux-1652737362702.jpeg'),
(1244, 'Radio', 16, '514-_Radio-1652737362723.jpeg'),
(1245, 'CD', 16, '515-_CD-1652737362748.jpeg'),
(1246, 'Film', 16, '516-_Film-1652737362754.jpeg'),
(1247, 'Cassette', 16, '517-_Cassette-1652737362776.jpeg'),
(1248, 'Tétine', 16, '518-_Tetine-1652737362832.jpeg'),
(1249, 'Bavette', 16, '519-_Bavette-1652737362852.jpeg'),
(1250, 'Couche', 16, '520-_Couche-1652737362876.jpeg'),
(1251, 'Débarbouillette', 16, '521-_Debarbouillette-1652737362894.jpeg'),
(1252, 'Lingettes', 16, '522-_Lingettes-1652737362921.jpeg'),
(1253, 'Savon', 16, '523-_Savon-1652737362928.jpeg'),
(1254, 'Laveuse_ sécheuse', 16, '524-_Laveuse__secheuse-1652737362951.jpeg'),
(1255, 'Panier à linge', 16, '525-_Panier_a_linge-1652737362966.jpeg'),
(1256, 'Lampe', 16, '526-_Lampe-1652737362985.jpeg'),
(1257, 'Lumière', 16, '527-_Lumiere-1652737362989.jpeg'),
(1258, 'Fenêtre', 16, '528-_Fenetre-1652737363059.jpeg'),
(1259, 'Porte', 16, '529-_Porte-1652737363336.jpeg'),
(1260, 'Escalier', 16, '530-_Escalier-1652737363418.jpeg'),
(1261, 'Table', 16, '531-_Table-1652737363435.jpeg'),
(1262, 'Pupitre', 16, '532-_Pupitre-1652737363462.jpeg'),
(1263, 'Chaise', 16, '533-_Chaise-1652737363492.jpeg'),
(1264, 'Minuterie', 16, '534-_Minuterie-1652737363572.jpeg'),
(1265, 'Horloge', 16, '535-_Horloge-1652737363882.jpeg'),
(1266, 'Horloge', 16, '536-_Horloge-1652737363900.jpeg'),
(1267, 'Assis', 17, '537-_Assis-1652737363910.jpeg'),
(1268, 'Musique', 17, '538-_Musique-1652737363929.jpeg'),
(1269, 'Lecture', 17, '539-_Lecture-1652737363955.jpeg'),
(1270, 'Par la fenêtre', 17, '540-_Par_la_fenetre-1652737363984.jpeg'),
(1271, 'Musique', 17, '541-_Musique-1652737364005.jpeg'),
(1272, 'Lecture', 17, '542-_Lecture-1652737364030.jpeg'),
(1273, 'Par la fenêtre', 17, '543-Par_la_fenetre-1652737364057.jpeg'),
(1274, 'Par le hublot', 17, '544-_Par_le_hublot-1652737364102.jpeg'),
(1275, 'Voiture', 17, '545-_Voiture-1652737364124.jpeg'),
(1276, 'Monter en voiture', 17, '546-_Monter_en_voiture-1652737364138.jpeg'),
(1277, 'Descendre de voiture', 17, '547-_Descendre_de_voiture-1652737364152.jpeg'),
(1278, 'Taxi', 17, '548-_Taxi-1652737364165.jpeg'),
(1279, 'Monter en taxi', 17, '549-_Monter_en_taxi-1652737364180.jpeg'),
(1280, 'Descendre du taxi', 17, '550-_Descendre_du_taxi-1652737364196.jpeg'),
(1281, 'Autobus scolaire', 17, '551-_Autobus_scolaire-1652737364207.jpeg'),
(1282, 'Monter dans l\'autobus', 17, '552-_Monter_dans_l\'autobus-1652737364224.jpeg'),
(1283, 'Descendre de l\'autobus', 17, '553-_Descendre_de_l\'autobus-1652737364238.jpeg'),
(1284, 'Transport d\'écoliers', 17, '554-_Transport_d\'ecoliers-1652737364251.jpeg'),
(1285, 'Monter', 17, '555-_Monter-1652737364265.jpeg'),
(1286, 'Descendre', 17, '556-_Descendre-1652737364274.jpeg'),
(1287, 'Monter', 17, '557-_Monter_-1652737364288.jpeg'),
(1288, 'Descendre', 17, '558-_Descendre_-1652737364300.jpeg'),
(1289, 'Avion', 17, '559-_Avion-1652737364306.jpeg'),
(1290, 'Autobus voyageur', 17, '560-_Autobus_voyageur-1652737364324.jpeg');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `DateOfBirth` date NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `CanDeleteFavPicto` tinyint(1) NOT NULL DEFAULT '0',
  `CanDeleteFavSentence` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `user_favpicto`
--

DROP TABLE IF EXISTS `user_favpicto`;
CREATE TABLE IF NOT EXISTS `user_favpicto` (
  `idUser` int(11) NOT NULL,
  `idPictogram` int(11) NOT NULL,
  KEY `idUser` (`idUser`) USING BTREE,
  KEY `idPictogram` (`idPictogram`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user_favpicto`
--

INSERT INTO `user_favpicto` (`idUser`, `idPictogram`) VALUES
(1, 937);

-- --------------------------------------------------------

--
-- Structure de la table `user_favsentence`
--

DROP TABLE IF EXISTS `user_favsentence`;
CREATE TABLE IF NOT EXISTS `user_favsentence` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  `idPictogram` int(11) NOT NULL,
  PRIMARY KEY (`id`,`idUser`,`position`),
  KEY `idUser` (`idUser`),
  KEY `idPictogram` (`idPictogram`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user_favsentence`
--

INSERT INTO `user_favsentence` (`id`, `idUser`, `position`, `idPictogram`) VALUES
(2, 1, 0, 935),
(2, 1, 1, 936),
(2, 1, 2, 937);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `educator_user`
--
ALTER TABLE `educator_user`
  ADD CONSTRAINT `educator_user_ibfk_1` FOREIGN KEY (`idEducator`) REFERENCES `educator` (`id`),
  ADD CONSTRAINT `educator_user_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `user` (`Id`);

--
-- Contraintes pour la table `pictogram`
--
ALTER TABLE `pictogram`
  ADD CONSTRAINT `pictogram_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `category` (`id`);

--
-- Contraintes pour la table `user_favpicto`
--
ALTER TABLE `user_favpicto`
  ADD CONSTRAINT `user_favpicto_ibfk_1` FOREIGN KEY (`idPictogram`) REFERENCES `pictogram` (`id`),
  ADD CONSTRAINT `user_favpicto_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `user` (`Id`);

--
-- Contraintes pour la table `user_favsentence`
--
ALTER TABLE `user_favsentence`
  ADD CONSTRAINT `user_favsentence_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`Id`),
  ADD CONSTRAINT `user_favsentence_ibfk_2` FOREIGN KEY (`idPictogram`) REFERENCES `pictogram` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
