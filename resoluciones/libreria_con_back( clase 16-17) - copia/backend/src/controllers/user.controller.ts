import { Request, Response, NextFunction } from 'express';
import { User , CreateUser, UserResponse, UserListResponse } from '../types/user';
import * as userService from '../services/user.service';

export async function getAllUsers(req: Request, res: Response<UserListResponse>, next: NextFunction) {
 try {
 const users = await userService.getAllUsers();
 res.json({ users, total: users.length, message: 'Users retrieved successfully' });
 } catch (error) { next(error); }
}

export async function getUserById(req: Request<{ id: string }>, res: Response<UserResponse>, next:
NextFunction) {
 try {
 const { id } = req.params;
 const users = await userService.getUserById(parseInt(id));
 res.json(users);
 } catch (error) { next(error); }
}
export async function createUser(req: Request<{}, {}, CreateUser>, res: Response<UserResponse>,
next: NextFunction) {
 try {
 const user = await userService.createUser(req.body);
 res.status(201).json(user);
 } catch (error) { next(error); }
}

export async function deleteUser(req: Request<{ id: string }>, res: Response, next: NextFunction) {
 try {
 const { id } = req.params;
 await userService.deleteUser(parseInt(id));
 res.json({ success: true, message: 'User deleted successfully' });
 } catch (error) { next(error); }
}
