import { Router } from "express";
import { register, login } from "../controllers/authController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Routes d'authentification
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Enregistrement d'un nouvel utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Email déjà utilisé
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Connexion utilisateur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie + retour token
 *       400:
 *         description: Identifiants invalides
 */

router.post("/register", register);
router.post("/login", login);


export default router;
