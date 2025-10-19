import { getAllBooks, createBook } from './Bookservices';
import prisma from '../config/prisma';
import { AgregarLibro } from '../types/books';

// Mockear Prisma
jest.mock('../config/prisma', () => ({
  book: {
    findMany: jest.fn(),
    create: jest.fn(),
  },
}));

describe('Books Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllBooks', () => {
    it('debería devolver una lista de libros', async () => {
      const mockBooks = [
        {
          id: 1,
          titulo: 'Cien años de soledad',
          autor: 'Gabriel García Márquez',
          descripcion: 'Una novela mágica...',
          imagen: 'url1.jpg',
          categoria: 'Ficción',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          titulo: '1984',
          autor: 'George Orwell',
          descripcion: 'Distopía clásica',
          imagen: 'url2.jpg',
          categoria: 'Distopía',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      (prisma.book.findMany as jest.Mock).mockResolvedValue(mockBooks);

      const result = await getAllBooks();

      expect(result).toEqual(mockBooks);
      expect(prisma.book.findMany).toHaveBeenCalledTimes(1);
    });

    it('debería devolver un array vacío si no hay libros', async () => {
      (prisma.book.findMany as jest.Mock).mockResolvedValue([]);

      const result = await getAllBooks();

      expect(result).toEqual([]);
      expect(prisma.book.findMany).toHaveBeenCalledTimes(1);
    });
  });

  describe('createBook', () => {
    it('debería crear un nuevo libro y devolverlo', async () => {
      const newBookData: AgregarLibro = {
        titulo: 'El principito',
        autor: 'Antoine de Saint-Exupéry',
        descripcion: 'Una historia poética',
        imagen: 'principito.jpg',
        categoria: 'Infantil',
      };

      const createdBook = {
        id: 3,
        ...newBookData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      (prisma.book.create as jest.Mock).mockResolvedValue(createdBook);

      const result = await createBook(newBookData);

      expect(result).toEqual(createdBook);
      expect(prisma.book.create).toHaveBeenCalledTimes(1);
      expect(prisma.book.create).toHaveBeenCalledWith({
        data: newBookData,
      });
    });

    it('debería lanzar un error si Prisma falla', async () => {
      const newBookData: AgregarLibro = {
        titulo: 'Libro inválido',
        autor: '',
        descripcion: "algo",
        imagen: "algo",
        categoria: '',
      };

      const errorMessage = 'Error de base de datos';
      (prisma.book.create as jest.Mock).mockRejectedValue(new Error(errorMessage));

      await expect(createBook(newBookData)).rejects.toThrow(errorMessage);
      expect(prisma.book.create).toHaveBeenCalledTimes(1);
    });
  });
});