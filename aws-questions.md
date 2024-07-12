# Sección 3: Tecnología Cloud (AWS) Preguntas de Conocimiento

### Pregunta 1:
#### **¿Qué es AWS y cuáles son sus beneficios principales?**

AWS (Amazon Web Services) es una plataforma integral de servicios en la nube ofrecida por Amazon. Proporciona una amplia gama de servicios que incluyen computación, almacenamiento, bases de datos, análisis, redes, aplicaciones móviles, herramientas de desarrollo, y mucho más, lo que permite a las empresas y desarrolladores construir, desplegar y gestionar aplicaciones de manera eficiente y rentable. Su negocio es el alquiler de estos servicios en la nube ahorrandole al usuario comprar e instalar sus propios servidores.
Sus beneficios principales son:

- Escalabilidad: Permite ajustar los recursos según la demanda de la infraestructura.
  
- Costo-efectividad: Se paga por lo que se usa, sin gastos iniciales.
  
- Seguridad: AWS proporciona una robusta infraestructura de seguridad, incluyendo cifrado de datos, controles de acceso y cumplimiento con numerosas normativas internacionale.

- Flexibilidad: Soporte para múltiples sistemas operativos y lenguajes de programación.

- Disponibilidad: Con centros de datos distribuidos globalmente, AWS garantiza una alta disponibilidad de sus servicios.

### Pregunta 2:
#### **Describe brevemente qué es una instancia EC2 y para qué se utiliza**

Una instancia EC2 (Elastic Compute Cloud) es un servicio proporcionado por AWS que permite a los usuarios lanzar y gestionar servidores virtuales en la nube. Puede ser utilizado para alojar aplicaciones, ejecutar procesos de backend, realizar análisis de datos, ejecutar scripts y cualquier uso que se le quiera dar a un servidor.

### Pregunta 3:
#### **Explica brevemente qué es un balanceador de carga y por qué es importante en una infraestructura web.**

Un balanceador de carga (Load Balancer) es un dispositivo o servicio que distribuye el tráfico de red entrante entre múltiples servidores. Es importante en la infraestructura web porque asegura que ninguna máquina individual esté sobrecargada, lo que ayuda a mantener el rendimiento y la disponibilidad de las aplicaciones y servicios.

### Pregunta 4:
#### **¿Qué es una base de datos relacional y cómo podrías implementar una en AWS?**

Una base de datos relacional es un tipo de base de datos que organiza los datos en tablas con filas y columnas. Cada tabla tiene una estructura definida y las relaciones entre las tablas se establecen mediante claves primarias y foráneas. En AWS, se puede implementar una base de datos relacional utilizando Amazon RDS (Relational Database Service). Este servicio permite utilizar varios motores de bases de datos como MySQL, PostgreSQL, MariaDB, Oracle, y SQL Server.

Para implementarlo en AWS habria que:
- Crear una instancia de RDS
- Elegir el motor de base de datos
- Configurar la base de datos
- Exponer la conexion

### Pregunta 5:
#### **¿Qué comando Linux utilizarías para abordar una alerta de llenado de disco? ¿Qué acciones realizarías?**

Para monitorear el espacio del disco utilizando algun comando de linux utilizaria `df` (Disk FileSystem) para verificar el uso del espacio en disco en general con la flag de `-h` para visualizar los espacios en unidades com MG/GB: 

```bash
df -h
```

Tambien esta la opcion del comando `du` (Disk Usage) que te permite visualizar el uso del disco de los archivos o directorios. Para este comando es necesario especificar un directorio. La flag `-h` es lo mismo que en el comando df y la flag `-s` nos muestra el tamaño de una carpeta en especifica.

```bash
du -sh <directorio o archivo>
```

Algunas acciones que realizaria para liberar espacio serian:
- Identificar archivos grandes o innecesarios suando df y du.
- Eliminar los que sean innecesarios utilizando rm.
- Comprimir archivos usando comandos como gzip o tar.
- Mover archivos a otro disco con el comando mv.
- Mover archivos a algun servicio de nube.
- Crear alertas (cron) para el monitoreo continuo del espacio del disco.

### Pregunta 6:
#### **¿Cómo trasladarías un archivo de una máquina Linux desde línea de comandos? ¿Y si el destino fuera otra máquina Linux?**

Para trasladar un archivo en la misma máquina Linux, utilizaría el comando mv o cp.

- Mover
```bash 
mv /ruta/del/archivo/original /ruta/del/destino/
```
- Copiar
```bash
cp /ruta/del/archivo/original /ruta/del/destino/
```

Si el destino es otra máquina Linux, se puede usar scp (secure copy) este permite copiar archivos entre distintas maquians utilizando ssh. Otra opcion es rsync que es una herramienta utilizada para sincronizar archivos y directorios entre dos ubicaciones, estas podrian ser localmente o entre máquinas remotas. 

- SCP
```bash
scp /ruta/del/archivo/original usuario@destino_host:/ruta/del/destino/
``` 

- RSYNC
```bash
rsync -avz /ruta/del/archivo usuario@host_destino:/ruta/del/destino/
```








