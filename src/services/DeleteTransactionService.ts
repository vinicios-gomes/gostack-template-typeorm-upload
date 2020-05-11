import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // Existe? Delete | error

    const transactionRepositoy = getCustomRepository(TransactionRepository);

    const transaction = await transactionRepositoy.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist.', 400);
    }

    await transactionRepositoy.remove(transaction);
  }
}

export default DeleteTransactionService;
