import { Document, Schema } from 'mongoose';

import { IUser } from "../../src/interfaces/model.interface";
import UserDatasource from "../../src/datasources/user.datasource";
import UserService from "../../src/services/user.service";

describe('UserService', () => {
    const arrangeNullObject = null;

    const arrangeUserObject: any = {
        _id: 'test_id',
        username: 'test'
    };

    const expectedNullObject: IUser = {
        _id: '',
        username: ''
    };

    const expectedUserObject: IUser = {
        _id: 'test_id',
        username: 'test'
    };

    it('Should return empty _id and username', async () => {
        // arrange
        jest.spyOn(UserDatasource, 'findByUsername').mockResolvedValue(arrangeNullObject);

        // act
        const act = await UserService.findUserByUsername('test');

        // assert
        expect(act).toEqual(expectedNullObject);
        expect(typeof act._id).toEqual('string');
        expect(typeof act.username).toEqual('string');
    });

    it('Should return _id and username', async () => {
        // arrange
        jest.spyOn(UserDatasource, 'findByUsername').mockResolvedValue(arrangeUserObject);

        // act
        const act = await UserService.findUserByUsername('test');

        // assert
        expect(act).toEqual(expectedUserObject);
        expect(typeof act._id).toEqual('string');
        expect(typeof act.username).toEqual('string');
    });

    it('Should return _id and username when creating user', async () => {
        // arrange
        jest.spyOn(UserDatasource, 'create').mockResolvedValue(arrangeUserObject);

        // act
        const act = await UserService.createUser('test');

        // assert
        expect(act).toEqual(expectedUserObject);
        expect(typeof act._id).toEqual('string');
        expect(typeof act.username).toEqual('string');
    });
});