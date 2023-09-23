// pages/api/user.js
import prisma from '@/utils/prisma';

export default async function handle(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phoneNumber, nationality, companyName, department, jobTitle, genre } = req.body;
        try {
            const newUser = await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    nationality,
                    companyName,
                    department,
                    jobTitle,
                    genre
                }
            });
            res.json(newUser);
        } catch (error) {
            res.status(400).json({ error: 'Failed to create user' });
        }
    } else if (req.method === 'GET') {
        const { id } = req.query;
        if (id) {
            try {
                const user = await prisma.user.findUnique({
                    where: { id: Number(id) }
                });
                res.json(user);
            } catch (error) {
                console.error('Error fetching user by ID:', error); // Log the error
                res.status(400).json({ error: 'Failed to fetch user', message: error.message });
            }
        } else {
            try {
                const users = await prisma.user.findMany();
                res.json(users);
            } catch (error) {
                console.error('Error fetching all users:', error); // Log the error
                res.status(400).json({ error: 'Failed to fetch users', message: error.message });
            }
        }

    } else if (req.method === 'PUT') {
        const { id, ...data } = req.body;
        try {
            const updatedUser = await prisma.user.update({
                where: { id: Number(id) },
                data
            });
            res.json(updatedUser);
        } catch (error) {
            res.status(400).json({ error: 'Failed to update user' });
        }
    }  else if (req.method === 'DELETE') {
        const { ids } = req.body;
        if (!ids || !Array.isArray(ids)) {
            res.status(400).json({ error: 'Expected an array of IDs.' });
            return;
        }
        
        try {
            // Use prisma.$transaction to delete multiple users in a single transaction.
            await prisma.$transaction(
                ids.map(id => prisma.user.delete({ where: { id: Number(id) } }))
            );
            
            res.json({ message: 'Users deleted successfully' });
        } catch (error) {
            console.error('Error deleting multiple users:', error); // Log the error
            res.status(400).json({ error: 'Failed to delete users', message: error.message });
        }
    }
}
