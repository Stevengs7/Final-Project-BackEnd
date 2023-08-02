#########################################
##########################  ESTO SE EJECUTA UNA SOLA VEZ    ############################

# crear la base de datos
sequelize db:create

# Crear el modelo Student || --name se referie al nombre que queremos dar al modelo (tabla) -- attributes se refiere a las columnas que va a llevar la tabla



#Subject
sequelize model:generate --name Subject --attributes 'subject_name:string'

#Rol
sequelize model:generate --name Role --attributes 'role:string'

#User
sequelize model:generate --name User --attributes 'user_name:string,user_last_name:string,birthday:dateonly, email:string, password:string, id_role:integer'   

# Student
sequelize model:generate --name Student --attributes 'id_user:integer'

# Tutor   
sequelize model:generate --name Tutor --attributes 'id_subject:integer, id_user:integer, verificated:enum:{yes,no}'

# Tutorship
sequelize model:generate --name Tutorship --attributes 'id_tutor:integer, id_student:integer, date:dateonly,
time:time, location:string'

# Las tablas intermedias en una relacion N a N no llevan modelo, pero si migración

########################################################################################


# Ejecutar una migracion
sequelize db:migrate #<----- En caso de querer migrar todas las tablas de una base.
sequelize db:migrate --to create-student01.js #<-------- En caso de querer migrar una tabla especifica.


# Revertir migracion
sequelize db:migrate:undo #<---- Revierte la ultima
sequelize db:migrate:undo:all #<---- Revierte todo

# Crear una seed
sequelize seed:generate --name seed-student


# Ejecutar el seed ya creado
sequelize db:seed:all # <---- Para ejecutar todos lo seeds
sequelize db:seed --seed 01-seed-student.js #<------ Para ejecutar un seed en especifico