"use strict";
/**
* @swagger
* components:
*  schemas:
*    CreatePortfolio:
*      type: object
*      required:
*        - type
*        - name
*        - status
*      properties:
*        type:
*          type: string
*          enum: [Vlogs, Ecommerce, Fashion, Branding, UGC, Music, BW, Creators, Beauty, Publications, Sport, Products, Swim, Commercial, Lifestyle, Portraiture, Film, Events, Mood, Home]
*          description: The type of the portfolio
*        name:
*          type: string
*          description: The name of the portfolio
*        status:
*          type: string
*          enum: [PENDING, APPROVED, REJECTED, COMPLETED]
*          description: The status of the portfolio
*        model:
*          type: string
*          description: The model name associated with the portfolio
*        days_location:
*          type: string
*          description: The days/location details of the portfolio
*        sessions:
*          type: string
*          description: Session details for the portfolio
*        producer:
*          type: string
*          description: Producer details
*        production_studio:
*          type: string
*          description: Production studio details
*        location:
*          type: string
*          description: The location ID
*        talent:
*          type: string
*          description: The talent associated with the portfolio
*        creation_10_images_services_provide:
*          type: string
*          description: Services provided related to 10 images in portfolio creation
*        brand:
*          type: string
*          description: Brand details for the portfolio
*        deliverables:
*          type: string
*          description: The deliverables associated with the portfolio
*
*    UpdatePortfolio:
*      type: object
*      properties:
*        type:
*          type: string
*          enum: [Vlogs, Ecommerce, Fashion, Branding, UGC, Music, BW, Creators, Beauty, Publications, Sport, Products, Swim, Commercial, Lifestyle, Portraiture, Film, Events, Mood, Home]
*          description: The type of the portfolio (can be optional during update)
*        status:
*          type: string
*          enum: [PENDING, APPROVED, REJECTED, COMPLETED]
*          description: The status of the portfolio (can be optional during update)
*        name:
*          type: string
*          description: The name of the portfolio
*        model:
*          type: string
*          description: The model name associated with the portfolio
*        days_location:
*          type: string
*          description: The days/location details of the portfolio
*        sessions:
*          type: string
*          description: Session details for the portfolio
*        producer:
*          type: string
*          description: Producer details
*        production_studio:
*          type: string
*          description: Production studio details
*        location:
*          type: number
*          description: The location ID
*        talent:
*          type: string
*          description: The talent associated with the portfolio
*        creation_10_images_services_provide:
*          type: string
*          description: Services provided related to 10 images in portfolio creation
*        brand:
*          type: string
*          description: Brand details for the portfolio
*        deliverables:
*          type: string
*          description: The deliverables associated with the portfolio
*/
/**
 * @swagger
 * tags:
 *   name: Portfolios
 *   description: Portfolio
 */
/**
 * @swagger
 * /portfolios/add-portfolio:
 *   post:
 *     summary: Create a new portfolio
 *     description: This API endpoint allows you to create a new portfolio.
 *     tags: [Portfolios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePortfolio'
 *     responses:
 *       201:
 *         description: Portfolio created successfully
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /portfolios/:
 *   get:
 *     summary: Get all portfolios
 *     description: This API endpoint retrieves all portfolios.
 *     tags: [Portfolios]
 *     responses:
 *       200:
 *         description: List of portfolios
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /portfolios/{id}:
 *   get:
 *     summary: Get portfolio by ID
 *     description: This API endpoint retrieves a portfolio by its ID.
 *     tags: [Portfolios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the portfolio to retrieve
 *     responses:
 *       200:
 *         description: Portfolio retrieved successfully
 *       404:
 *         description: Portfolio not found
 */
/**
 * @swagger
 * /portfolios/update-portfolio/{id}:
 *   put:
 *     summary: Update portfolio by ID
 *     description: This API endpoint updates an existing portfolio by its ID.
 *     tags: [Portfolios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the portfolio to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePortfolio'
 *     responses:
 *       200:
 *         description: Portfolio updated successfully
 *       404:
 *         description: Portfolio not found
 */
/**
 * @swagger
 * /portfolios/delete-portfolio/{id}:
 *   delete:
 *     summary: Delete portfolio by ID
 *     description: This API endpoint deletes a portfolio by its ID.
 *     tags: [Portfolios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the portfolio to delete
 *     responses:
 *       200:
 *         description: Portfolio deleted successfully
 *       404:
 *         description: Portfolio not found
 */
