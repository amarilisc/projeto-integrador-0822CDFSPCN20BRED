CREATE DATABASE  IF NOT EXISTS `ecommerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecommerce`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `preco` double DEFAULT NULL,
  `image1` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'Morango com suspiro','Bolos','Passeie pelas nuvens de felicidade com nosso bolo de morango e suspiros. A combinação perfeita de sabores e texturas para te levar ao êxtase do sabor!',80,'https://imgcloud.com.br/share/jh604lcinoJhWGhp','2023-05-21 18:21:19','2023-05-21 18:21:19'),(3,'Brigadeiro crocante','Bolos','Desvende o segredo da felicidade com nosso bolo de brigadeiro crocante. Nosso brigadeiro cremoso e pedacinhos crocantes se juntam nessa explosão de sabor! Experimente!',70,'https://imgcloud.com.br/share/CtyjIz6BmFz2Oqvv','2023-05-21 18:28:58','2023-05-21 18:28:58'),(4,'Frutas Vermelhas','Bolos','Deleite-se com o bolo dos deuses! Frutas vermelhas suculentas se encontram com a nata dos sonhos, criando uma maravilhosa combinação de frescor e cremosidade.',90,'https://imgcloud.com.br/share/TOYtzdvY71uZtnP6','2023-05-21 18:36:09','2023-05-21 22:55:51'),(5,'Mesclado','Bolos','Nosso bolo mesclado combina o melhor do chocolate e baunilha em uma dança deliciosa de cores e texturas. Cada mordida é uma experiência irresistível e surpreendente!',70,'https://imgcloud.com.br/share/cStFrBZhvVqO1kbC','2023-05-22 14:20:21','2023-05-22 14:30:12'),(6,'Morango crocante','Bolos','Delicie-se com o nosso bolo de morango crocante! Morangos frescos, delicadamente combinados com uma camada irresistível de crocância.',90,'https://imgcloud.com.br/share/b6Mb62DyKDT2k5oa','2023-05-22 14:29:12','2023-05-22 14:29:12'),(7,'Bolo trufado','Bolos','Prepare-se para uma experiência intensa de sabor com nosso bolo trufado. Camadas generosas de chocolate macio e trufas cremosas se unem em uma sinfonia dos sentidos.',100,'https://imgcloud.com.br/share/JnJN6ytA0mcm79BZ','2023-05-22 14:29:36','2023-05-22 14:29:36'),(8,'Café com chantily','Bolos','Sinta a energia do café em cada pedaço do nosso bolo! É a dose de felicidade para começar o dia ou desfrutar de um momento especial a qualquer hora.',90,'https://imgcloud.com.br/share/bIuODfkbXvvj71Er','2023-05-22 16:30:16','2023-05-22 16:30:16'),(9,'Bolo de Nozes','Bolos','Delicie-se com a nobreza das nozes em nosso bolo artesanal! Camadas de massa macia envolvendo nozes crocantes. Uma experiência irresistível para os apreciadores de nozes!',90,'https://imgcloud.com.br/share/NG5thac13Qo5JGSs','2023-05-22 16:30:52','2023-05-22 16:30:52'),(10,'Cenoura com chocolate','Bolos','A maciez da massa de cenoura se funde harmoniosamente com a cobertura cremosa de chocolate, criando um casamento perfeito de sabores que irá encantar o seu paladar.',90,'https://imgcloud.com.br/share/j9TSOVcp8SYTALaZ','2023-05-22 16:31:19','2023-05-22 16:31:19');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Amarilis Caccia','senha123','teste@mail.com','2023-05-21 18:06:22','2023-05-21 18:06:22');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'ecommerce'
--

--
-- Dumping routines for database 'ecommerce'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-22 15:12:43
