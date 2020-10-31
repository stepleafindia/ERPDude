-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 01, 2020 at 03:21 PM
-- Server version: 10.1.39-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `billing`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(220) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(320) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_number` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alter_contact_number` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(320) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(800) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pin_code` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country_id` bigint(20) UNSIGNED DEFAULT NULL,
  `state_id` bigint(20) UNSIGNED DEFAULT NULL,
  `gstin` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `logo`, `email`, `contact_number`, `alter_contact_number`, `website`, `address`, `pin_code`, `country_id`, `state_id`, `gstin`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Codesense Soft Solutions Pvt.Ltd', 'codesense-logo.png', NULL, '+91 9524476114', NULL, 'https://www.codesensesoftsolutions.com/', 'RG Complex,\n                 2nd Floor, \n                 Telungupalayam Pirivu, \n                 Perur Main Road, \n                 Coimbatore-641039.', '641039', 98, 23, NULL, '2020-08-01 05:16:58', '2020-08-01 05:16:58', NULL),
(2, 'Stepleaf', 'stepleaf-logo.png', NULL, '+91 9524476114', NULL, 'https://www.codesensesoftsolutions.com/', 'RG Complex,\n                2nd Floor, \n                Telungupalayam Pirivu, \n                Perur Main Road, \n                Coimbatore-641039.', '641039', 98, 23, NULL, '2020-08-01 05:16:58', '2020-08-01 05:16:58', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency_code` varchar(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency_name` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency_symbol` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dial_code` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `code`, `currency_code`, `currency_name`, `currency_symbol`, `dial_code`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Afghanistan', 'AF', NULL, NULL, NULL, '+93', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(2, 'Aland Islands', 'AX', NULL, NULL, NULL, '+358', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(3, 'Albania', 'AL', NULL, NULL, NULL, '+355', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(4, 'Algeria', 'DZ', NULL, NULL, NULL, '+213', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(5, 'American Samoa', 'AS', 'USD', 'Dollars', '$', '+1684', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(6, 'Andorra', 'AD', 'EUR', 'Euro', '€', '+376', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(7, 'Angola', 'AO', NULL, NULL, NULL, '+244', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(8, 'Anguilla', 'AI', NULL, NULL, NULL, '+1264', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(9, 'Antarctica', 'AQ', NULL, NULL, NULL, '+672', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(10, 'Antigua and Barbuda', 'AG', NULL, NULL, NULL, '+1268', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(11, 'Argentina', 'AR', NULL, NULL, NULL, '+54', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(12, 'Armenia', 'AM', NULL, NULL, NULL, '+374', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(13, 'Aruba', 'AW', NULL, NULL, NULL, '+297', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(14, 'Australia', 'AU', 'AUD', 'Dollars', '$', '+61', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(15, 'Austria', 'AT', 'EUR', 'Euro', '€', '+43', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(16, 'Azerbaijan', 'AZ', NULL, NULL, NULL, '+994', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(17, 'Bahamas', 'BS', NULL, NULL, NULL, '+1242', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(18, 'Bahrain', 'BH', NULL, NULL, NULL, '+973', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(19, 'Bangladesh', 'BD', NULL, NULL, NULL, '+880', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(20, 'Barbados', 'BB', NULL, NULL, NULL, '+1246', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(21, 'Belarus', 'BY', NULL, NULL, NULL, '+375', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(22, 'Belgium', 'BE', 'EUR', 'Euro', '€', '+32', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(23, 'Belize', 'BZ', NULL, NULL, NULL, '+501', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(24, 'Benin', 'BJ', NULL, NULL, NULL, '+229', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(25, 'Bermuda', 'BM', NULL, NULL, NULL, '+1441', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(26, 'Bhutan', 'BT', NULL, NULL, NULL, '+975', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(27, 'Bolivia', 'BO', NULL, NULL, NULL, '+591', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(28, 'Bosnia and Herzegovina', 'BA', NULL, NULL, NULL, '+387', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(29, 'Botswana', 'BW', NULL, NULL, NULL, '+267', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(30, 'Brazil', 'BR', NULL, NULL, NULL, '+55', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(31, 'British Indian Ocean Territory', 'IO', 'USD', 'Dollars', '$', '+246', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(32, 'Brunei Darussalam', 'BN', NULL, NULL, NULL, '+673', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(33, 'Bulgaria', 'BG', NULL, NULL, NULL, '+359', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(34, 'Burkina Faso', 'BF', NULL, NULL, NULL, '+226', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(35, 'Burundi', 'BI', NULL, NULL, NULL, '+257', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(36, 'Cambodia', 'KH', NULL, NULL, NULL, '+855', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(37, 'Cameroon', 'CM', NULL, NULL, NULL, '+237', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(38, 'Canada', 'CA', NULL, NULL, NULL, '+1', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(39, 'Cape Verde', 'CV', NULL, NULL, NULL, '+238', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(40, 'Cayman Islands', 'KY', NULL, NULL, NULL, '+ 345', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(41, 'Central African Republic', 'CF', NULL, NULL, NULL, '+236', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(42, 'Chad', 'TD', NULL, NULL, NULL, '+235', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(43, 'Chile', 'CL', NULL, NULL, NULL, '+56', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(44, 'China', 'CN', NULL, NULL, NULL, '+86', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(45, 'Christmas Island', 'CX', NULL, NULL, NULL, '+61', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(46, 'Cocos (Keeling) Islands', 'CC', 'AUD', 'Dollars', '$', '+61', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(47, 'Colombia', 'CO', NULL, NULL, NULL, '+57', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(48, 'Comoros', 'KM', NULL, NULL, NULL, '+269', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(49, 'Congo', 'CG', NULL, NULL, NULL, '+242', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(50, 'Democratic Republic of the Congo', 'CD', NULL, NULL, NULL, '+243', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(51, 'Cook Islands', 'CK', NULL, NULL, NULL, '+682', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(52, 'Costa Rica', 'CR', NULL, NULL, NULL, '+506', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(53, 'Côte d\'Ivoire', 'CI', NULL, NULL, NULL, '+225', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(54, 'Croatia', 'HR', NULL, NULL, NULL, '+385', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(55, 'Cuba', 'CU', NULL, NULL, NULL, '+53', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(56, 'Cyprus', 'CY', 'EUR', 'Euro', '€', '+357', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(57, 'Czechia', 'CZ', NULL, NULL, NULL, '+420', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(58, 'Denmark', 'DK', NULL, NULL, NULL, '+45', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(59, 'Djibouti', 'DJ', NULL, NULL, NULL, '+253', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(60, 'Dominica', 'DM', NULL, NULL, NULL, '+1767', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(61, 'Dominican Republic', 'DO', NULL, NULL, NULL, '+1849', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(62, 'Ecuador', 'EC', NULL, NULL, NULL, '+593', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(63, 'Egypt', 'EG', NULL, NULL, NULL, '+20', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(64, 'El Salvador', 'SV', NULL, NULL, NULL, '+503', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(65, 'Equatorial Guinea', 'GQ', NULL, NULL, NULL, '+240', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(66, 'Eritrea', 'ER', NULL, NULL, NULL, '+291', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(67, 'Estonia', 'EE', 'EUR', 'Euro', '€', '+372', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(68, 'Ethiopia', 'ET', NULL, NULL, NULL, '+251', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(69, 'Falkland Islands (Malvinas)', 'FK', NULL, NULL, NULL, '+500', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(70, 'Faroe Islands', 'FO', NULL, NULL, NULL, '+298', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(71, 'Fiji', 'FJ', NULL, NULL, NULL, '+679', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(72, 'Finland', 'FI', 'EUR', 'Euro', '€', '+358', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(73, 'France', 'FR', 'EUR', 'Euro', '€', '+33', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(74, 'French Guiana', 'GF', NULL, NULL, NULL, '+594', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(75, 'French Polynesia', 'PF', NULL, NULL, NULL, '+689', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(76, 'Gabon', 'GA', NULL, NULL, NULL, '+241', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(77, 'Gambia', 'GM', NULL, NULL, NULL, '+220', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(78, 'Georgia', 'GE', NULL, NULL, NULL, '+995', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(79, 'Germany', 'DE', 'EUR', 'Euro', '€', '+49', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(80, 'Ghana', 'GH', NULL, NULL, NULL, '+233', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(81, 'Gibraltar', 'GI', NULL, NULL, NULL, '+350', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(82, 'Greece', 'GR', 'EUR', 'Euro', '€', '+30', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(83, 'Greenland', 'GL', NULL, NULL, NULL, '+299', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(84, 'Grenada', 'GD', NULL, NULL, NULL, '+1473', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(85, 'Guadeloupe', 'GP', NULL, NULL, NULL, '+590', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(86, 'Guam', 'GU', 'USD', 'Dollars', '$', '+1671', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(87, 'Guatemala', 'GT', NULL, NULL, NULL, '+502', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(88, 'Guernsey', 'GG', NULL, NULL, NULL, '+44', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(89, 'Guinea', 'GN', NULL, NULL, NULL, '+224', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(90, 'Guinea-Bissau', 'GW', NULL, NULL, NULL, '+245', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(91, 'Guyana', 'GY', NULL, NULL, NULL, '+595', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(92, 'Haiti', 'HT', 'USD', 'Dollars', '$', '+509', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(93, 'Vatican', 'VA', 'EUR', 'Euro', '€', '+379', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(94, 'Honduras', 'HN', NULL, NULL, NULL, '+504', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(95, 'Hong Kong', 'HK', NULL, NULL, NULL, '+852', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(96, 'Hungary', 'HU', NULL, NULL, NULL, '+36', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(97, 'Iceland', 'IS', NULL, NULL, NULL, '+354', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(98, 'India', 'IN', 'INR', 'Rupees', '₹', '+91', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(99, 'Indonesia', 'ID', NULL, NULL, NULL, '+62', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(100, 'Iran', 'IR', NULL, NULL, NULL, '+98', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(101, 'Iraq', 'IQ', NULL, NULL, NULL, '+964', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(102, 'Ireland', 'IE', 'EUR', 'Euro', '€', '+353', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(103, 'Isle of Man', 'IM', NULL, NULL, NULL, '+44', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(104, 'Israel', 'IL', NULL, NULL, NULL, '+972', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(105, 'Italy', 'IT', 'EUR', 'Euro', '€', '+39', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(106, 'Jamaica', 'JM', NULL, NULL, NULL, '+1876', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(107, 'Japan', 'JP', NULL, NULL, NULL, '+81', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(108, 'Jersey', 'JE', NULL, NULL, NULL, '+44', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(109, 'Jordan', 'JO', NULL, NULL, NULL, '+962', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(110, 'Kazakhstan', 'KZ', NULL, NULL, NULL, '+77', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(111, 'Kenya', 'KE', NULL, NULL, NULL, '+254', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(112, 'Kiribati', 'KI', 'AUD', 'Dollars', '$', '+686', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(113, 'North Korea', 'KP', NULL, NULL, NULL, '+850', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(114, 'South Korea', 'KR', NULL, NULL, NULL, '+82', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(115, 'Kuwait', 'KW', NULL, NULL, NULL, '+965', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(116, 'Kyrgyzstan', 'KG', NULL, NULL, NULL, '+996', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(117, 'Laos', 'LA', NULL, NULL, NULL, '+856', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(118, 'Latvia', 'LV', 'EUR', 'Euro', '€', '+371', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(119, 'Lebanon', 'LB', NULL, NULL, NULL, '+961', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(120, 'Lesotho', 'LS', NULL, NULL, NULL, '+266', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(121, 'Liberia', 'LR', NULL, NULL, NULL, '+231', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(122, 'Libya', 'LY', NULL, NULL, NULL, '+218', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(123, 'Liechtenstein', 'LI', NULL, NULL, NULL, '+423', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(124, 'Lithuania', 'LT', NULL, NULL, NULL, '+370', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(125, 'Luxembourg', 'LU', NULL, NULL, NULL, '+352', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(126, 'Macao', 'MO', NULL, NULL, NULL, '+853', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(127, 'North Macedonia', 'MK', NULL, NULL, NULL, '+389', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(128, 'Madagascar', 'MG', NULL, NULL, NULL, '+261', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(129, 'Malawi', 'MW', NULL, NULL, NULL, '+265', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(130, 'Malaysia', 'MY', NULL, NULL, NULL, '+60', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(131, 'Maldives', 'MV', NULL, NULL, NULL, '+960', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(132, 'Mali', 'ML', NULL, NULL, NULL, '+223', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(133, 'Malta', 'MT', 'EUR', 'Euro', '€', '+356', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(134, 'Marshall Islands', 'MH', 'USD', 'Dollars', '$', '+692', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(135, 'Martinique', 'MQ', NULL, NULL, NULL, '+596', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(136, 'Mauritania', 'MR', NULL, NULL, NULL, '+222', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(137, 'Mauritius', 'MU', NULL, NULL, NULL, '+230', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(138, 'Mayotte', 'YT', NULL, NULL, NULL, '+262', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(139, 'Mexico', 'MX', NULL, NULL, NULL, '+52', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(140, 'Federated States of Micronesia', 'FM', 'USD', 'Dollars', '$', '+691', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(141, 'Moldova', 'MD', NULL, NULL, NULL, '+373', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(142, 'Monaco', 'MC', 'EUR', 'Euro', '€', '+377', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(143, 'Mongolia', 'MN', NULL, NULL, NULL, '+976', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(144, 'Montenegro', 'ME', 'EUR', 'Euro', '€', '+382', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(145, 'Montserrat', 'MS', NULL, NULL, NULL, '+1664', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(146, 'Morocco', 'MA', NULL, NULL, NULL, '+212', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(147, 'Mozambique', 'MZ', NULL, NULL, NULL, '+258', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(148, 'Myanmar', 'MM', NULL, NULL, NULL, '+95', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(149, 'Namibia', 'NA', NULL, NULL, NULL, '+264', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(150, 'Nauru', 'NR', 'AUD', 'Dollars', '$', '+674', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(151, 'Nepal', 'NP', NULL, NULL, NULL, '+977', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(152, 'Netherlands', 'NL', 'EUR', 'Euro', '€', '+31', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(153, 'New Caledonia', 'NC', NULL, NULL, NULL, '+687', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(154, 'New Zealand', 'NZ', NULL, NULL, NULL, '+64', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(155, 'Nicaragua', 'NI', NULL, NULL, NULL, '+505', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(156, 'Niger', 'NE', NULL, NULL, NULL, '+227', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(157, 'Nigeria', 'NG', NULL, NULL, NULL, '+234', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(158, 'Niue', 'NU', NULL, NULL, NULL, '+683', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(159, 'Norfolk Island', 'NF', NULL, NULL, NULL, '+672', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(160, 'Northern Mariana Islands', 'MP', 'USD', 'Dollars', '$', '+1670', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(161, 'Norway', 'NO', NULL, NULL, NULL, '+47', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(162, 'Oman', 'OM', NULL, NULL, NULL, '+968', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(163, 'Pakistan', 'PK', NULL, NULL, NULL, '+92', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(164, 'Palau', 'PW', 'USD', 'Dollars', '$', '+680', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(165, 'Palestine', 'PS', NULL, NULL, NULL, '+970', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(166, 'Panama', 'PA', 'USD', 'Dollars', '$', '+507', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(167, 'Papua New Guinea', 'PG', NULL, NULL, NULL, '+675', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(168, 'Paraguay', 'PY', NULL, NULL, NULL, '+595', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(169, 'Peru', 'PE', NULL, NULL, NULL, '+51', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(170, 'Philippines', 'PH', NULL, NULL, NULL, '+63', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(171, 'Pitcairn', 'PN', NULL, NULL, NULL, '+872', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(172, 'Poland', 'PL', NULL, NULL, NULL, '+48', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(173, 'Portugal', 'PT', 'EUR', 'Euro', '€', '+351', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(174, 'Puerto Rico', 'PR', 'USD', 'Dollars', '$', '+1939', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(175, 'Qatar', 'QA', NULL, NULL, NULL, '+974', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(176, 'Romania', 'RO', NULL, NULL, NULL, '+40', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(177, 'Russian Federation', 'RU', NULL, NULL, NULL, '+7', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(178, 'Rwanda', 'RW', NULL, NULL, NULL, '+250', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(179, 'Réunion', 'RE', NULL, NULL, NULL, '+262', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(180, 'Saint Barthélemy', 'BL', NULL, NULL, NULL, '+590', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(181, 'Saint Helena', 'SH', NULL, NULL, NULL, '+290', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(182, 'Saint Kitts and Nevis', 'KN', NULL, NULL, NULL, '+1869', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(183, 'Saint Lucia', 'LC', NULL, NULL, NULL, '+1758', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(184, 'Saint Martin', 'MF', NULL, NULL, NULL, '+590', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(185, 'Saint Pierre and Miquelon', 'PM', NULL, NULL, NULL, '+508', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(186, 'Saint Vincent and the Grenadines', 'VC', NULL, NULL, NULL, '+1784', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(187, 'Samoa', 'WS', NULL, NULL, NULL, '+685', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(188, 'San Marino', 'SM', 'EUR', 'Euro', '€', '+378', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(189, 'Sao Tome and Principe', 'ST', NULL, NULL, NULL, '+239', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(190, 'Saudi Arabia', 'SA', NULL, NULL, NULL, '+966', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(191, 'Senegal', 'SN', NULL, NULL, NULL, '+221', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(192, 'Serbia', 'RS', NULL, NULL, NULL, '+381', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(193, 'Seychelles', 'SC', NULL, NULL, NULL, '+248', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(194, 'Sierra Leone', 'SL', NULL, NULL, NULL, '+232', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(195, 'Singapore', 'SG', 'SGD', 'Dollars', '$', '+65', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(196, 'Slovakia', 'SK', 'EUR', 'Euro', '€', '+421', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(197, 'Slovenia', 'SI', 'EUR', 'Euro', '€', '+386', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(198, 'Solomon Islands', 'SB', NULL, NULL, NULL, '+677', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(199, 'Somalia', 'SO', NULL, NULL, NULL, '+252', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(200, 'South Africa', 'ZA', NULL, NULL, NULL, '+27', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(201, 'South Sudan', 'SS', NULL, NULL, NULL, '+211', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(202, 'South Georgia', 'GS', NULL, NULL, NULL, '+500', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(203, 'Spain', 'ES', 'EUR', 'Euro', '€', '+34', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(204, 'Sri Lanka', 'LK', 'LKR', 'Rupees', 'රු', '+94', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(205, 'Sudan', 'SD', NULL, NULL, NULL, '+249', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(206, 'Suriname', 'SR', NULL, NULL, NULL, '+597', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(207, 'Svalbard and Jan Mayen', 'SJ', NULL, NULL, NULL, '+47', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(208, 'Swaziland', 'SZ', NULL, NULL, NULL, '+268', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(209, 'Sweden', 'SE', NULL, NULL, NULL, '+46', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(210, 'Switzerland', 'CH', NULL, NULL, NULL, '+41', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(211, 'Syrian Arab Republic', 'SY', NULL, NULL, NULL, '+963', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(212, 'Taiwan', 'TW', NULL, NULL, NULL, '+886', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(213, 'Tajikistan', 'TJ', NULL, NULL, NULL, '+992', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(214, 'Tanzania', 'TZ', NULL, NULL, NULL, '+255', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(215, 'Thailand', 'TH', NULL, NULL, NULL, '+66', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(216, 'Timor-Leste', 'TL', NULL, NULL, NULL, '+670', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(217, 'Togo', 'TG', NULL, NULL, NULL, '+228', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(218, 'Tokelau', 'TK', NULL, NULL, NULL, '+690', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(219, 'Tonga', 'TO', NULL, NULL, NULL, '+676', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(220, 'Trinidad and Tobago', 'TT', NULL, NULL, NULL, '+1868', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(221, 'Tunisia', 'TN', NULL, NULL, NULL, '+216', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(222, 'Turkey', 'TR', NULL, NULL, NULL, '+90', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(223, 'Turkmenistan', 'TM', NULL, NULL, NULL, '+993', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(224, 'Turks and Caicos Islands', 'TC', 'USD', 'Dollars', '$', '+1649', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(225, 'Tuvalu', 'TV', 'AUD', 'Dollars', '$', '+688', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(226, 'Uganda', 'UG', NULL, NULL, NULL, '+256', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(227, 'Ukraine', 'UA', NULL, NULL, NULL, '+380', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(228, 'United Arab Emirates', 'AE', NULL, NULL, NULL, '+971', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(229, 'United Kingdom', 'GB', NULL, NULL, NULL, '+44', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(230, 'United States of America', 'US', 'USD', 'Dollars', '$', '+1', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(231, 'Uruguay', 'UY', NULL, NULL, NULL, '+598', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(232, 'Uzbekistan', 'UZ', NULL, NULL, NULL, '+998', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(233, 'Vanuatu', 'VU', NULL, NULL, NULL, '+678', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(234, 'Venezuela', 'VE', NULL, NULL, NULL, '+58', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(235, 'Viet Nam', 'VN', NULL, NULL, NULL, '+84', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(236, 'Virgin Islands, British', 'VG', 'USD', 'Dollars', '$', '+1284', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(237, 'Virgin Islands, U.S.', 'VI', 'USD', 'Dollars', '$', '+1340', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(238, 'Wallis and Futuna', 'WF', NULL, NULL, NULL, '+681', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(239, 'Yemen', 'YE', NULL, NULL, NULL, '+967', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(240, 'Zambia', 'ZM', NULL, NULL, NULL, '+260', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(241, 'Zimbabwe', 'ZW', NULL, NULL, NULL, '+263', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(242, 'Bouvet Island', 'BV', NULL, NULL, NULL, '+47', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(243, 'Bonaire', 'BQ', NULL, NULL, NULL, '+599', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(244, 'Heard and McDonald Islands', 'HM', NULL, NULL, NULL, '+672', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(245, 'French Southern Territories', 'TF', NULL, NULL, NULL, '+31', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(246, 'Western Sahara', 'EH', NULL, NULL, NULL, '+212', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(247, 'Curaçao', 'CW', NULL, NULL, NULL, '+599', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(248, 'United States Minor Outlying Islands', 'UM', NULL, NULL, NULL, '+246', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(249, 'Sint Maarten', 'SX', NULL, NULL, NULL, '+599', '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_number` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alter_contact_number` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(600) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin_code` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country_id` bigint(20) UNSIGNED DEFAULT NULL,
  `state_id` bigint(20) UNSIGNED DEFAULT NULL,
  `gstin` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(122, '2020_07_31_133804_create_users_table', 1),
(123, '2020_07_31_133910_create_countries_table', 1),
(124, '2020_08_01_041201_create_states_table', 1),
(125, '2020_08_01_041320_create_companies_table', 1),
(126, '2020_08_01_041359_create_tax_settings_table', 1),
(127, '2020_08_01_062408_create_customers_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_id` bigint(20) UNSIGNED DEFAULT NULL,
  `is_union_territory` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `name`, `country_id`, `is_union_territory`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Andhra Pradesh', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(2, 'Arunachal Pradesh', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(3, 'Assam', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(4, 'Bihar', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(5, 'Chhattisgarh', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(6, 'Goa', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(7, 'Gujarat', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(8, 'Haryana', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(9, 'Himachal Pradesh', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(10, 'Jharkhand', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(11, 'Karnataka', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(12, 'Kerala', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(13, 'Madhya Pradesh', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(14, 'Maharashtra', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(15, 'Manipur', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(16, 'Meghalaya', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(17, 'Mizoram', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(18, 'Nagaland', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(19, 'Odisha', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(20, 'Punjab', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(21, 'Rajasthan', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(22, 'Sikkim', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(23, 'Tamil Nadu', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(24, 'Telangana', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(25, 'Tripura', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(26, 'Uttar Pradesh', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(27, 'Uttarakhand', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(28, 'West Bengal', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(29, 'Andaman and Nicobar Islands', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(30, 'Chandigarh', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(31, 'Dadra and Nagar Haveli and Daman and Diu', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(32, 'Delhi', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(33, 'Jammu and Kashmir', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(34, 'Ladakh', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(35, 'Lakshadweep', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
(36, 'Puducherry', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tax_settings`
--

CREATE TABLE `tax_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` decimal(5,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tax_settings`
--

INSERT INTO `tax_settings` (`id`, `name`, `value`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'IGST(18%)', '18.00', '2020-08-01 05:16:58', '2020-08-01 05:16:58', NULL),
(2, 'CGST(9%)', '9.00', '2020-08-01 05:16:58', '2020-08-01 05:16:58', NULL),
(3, 'SGST(9%)', '9.00', '2020-08-01 05:16:58', '2020-08-01 05:16:58', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_role` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `username` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_picture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_role`, `first_name`, `last_name`, `email`, `email_verified_at`, `username`, `password`, `profile_picture`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'SuperAdmin', 'Codesense', '', NULL, NULL, 'Codesense', '$2y$10$nMv0XO8hDpITkFPR/qxjdepSOxj69Q9SGEFtu9.0B8Mj6GIoPLT6m', NULL, NULL, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `companies_country_id_foreign` (`country_id`),
  ADD KEY `companies_state_id_foreign` (`state_id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customers_country_id_foreign` (`country_id`),
  ADD KEY `customers_state_id_foreign` (`state_id`),
  ADD KEY `customers_email_index` (`email`),
  ADD KEY `customers_contact_number_index` (`contact_number`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`),
  ADD KEY `states_country_id_foreign` (`country_id`);

--
-- Indexes for table `tax_settings`
--
ALTER TABLE `tax_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=128;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `tax_settings`
--
ALTER TABLE `tax_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `companies`
--
ALTER TABLE `companies`
  ADD CONSTRAINT `companies_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `companies_state_id_foreign` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `customers_state_id_foreign` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `states`
--
ALTER TABLE `states`
  ADD CONSTRAINT `states_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
