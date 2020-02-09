import { Column, Table, Model, DataType } from 'sequelize-typescript'

@Table({
  defaultScope: {
    attributes: {exclude: ['deletedAt']}
  },
  paranoid: true,
  tableName: "customers",
})

export class Customer extends Model<Customer> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true, 
    type: DataType.INTEGER.UNSIGNED
  })
  id!: string
 
  @Column({ 
    allowNull: false,
    type: DataType.STRING
  })
  firstName!: string
} 

export default [Customer]