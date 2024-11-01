/**
 * @file user/services/index.ts
 * @author [Kingsley Ihemelandu]
 * @github [https://github.com/kijuchihe]
 * @description Defines the user services for the application.
 * @created [2024-07-20]
 * @lastModified [2024-07-20]
 * @module api/v1/modules/user
 */
import { ideahub_v1alpha } from 'googleapis'
import UserRepository from '../repository'
import { ClientError } from '../../../../../libs/utils/handlers/error'

const userRepository = new UserRepository()

class UserService {
  async getUserById(id: string) {
    const user = await userRepository.findById(id)
    if (!user) {
      throw new ClientError('User not found')
    }
    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
      emailVerified: user.emailVerified,
    }
    return data
  }
}

export default UserService
