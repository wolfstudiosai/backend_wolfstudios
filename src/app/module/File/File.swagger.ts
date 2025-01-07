/**
 * @swagger
 * tags:
 *   name: File
 *   description: File upload api
 */

// Upload file

/**
 * @swagger
 * /file/upload:
 *   post:
 *     summary: Upload file
 *     tags: [File]
 *     security:
 *       - AdminAuth: []
 *       - UserAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                   description: Array of file to upload
 *     responses:
 *       201:
 *         description: If the files are uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Success status
 *                   example: true
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: Files uploaded successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     uploaded_count:
 *                       type: number
 *                       example: 2
 *                     message:
 *                       type: string
 *                       example: 2 file has been uploaded
 *       401:
 *         description: Unauthorized. Only registered user upload files
 *       400:
 *         description: Bad Request
 */
