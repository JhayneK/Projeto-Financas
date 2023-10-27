-- ************************************** [log_user]
CREATE TABLE [log_user]
(
 [id_log]   int IDENTITY ,
 [log_data] varchar(max) NOT NULL ,


 CONSTRAINT [pk_log_users] PRIMARY KEY CLUSTERED ([id_log] ASC)
);
GO


-- ************************************** [log_edit]
CREATE TABLE [log_edit]
(
 [id_log_edit]   int IDENTITY ,
 [log_edit_data] varchar(max) NOT NULL ,


 CONSTRAINT [pk_log_edit] PRIMARY KEY CLUSTERED ([id_log_edit] ASC)
);
GO


-- ************************************** [usuario]
CREATE TABLE [usuario]
(
 [id_usuario] int IDENTITY ,
 [username]   varchar(64) NOT NULL ,
 [email]      varchar(64) NOT NULL ,
 [password]   varchar(64) NOT NULL ,


 CONSTRAINT [pk_usuario] PRIMARY KEY CLUSTERED ([id_usuario] ASC)
);
GO


-- ************************************** [banco]
CREATE TABLE [banco]
(
 [id_banco]   int IDENTITY ,
 [id_usuario] int NOT NULL ,
 [banco]      varchar(50) NOT NULL ,


 CONSTRAINT [pk_banco] PRIMARY KEY CLUSTERED ([id_banco] ASC),
 CONSTRAINT [fk_usuario__banco] FOREIGN KEY ([id_usuario])  REFERENCES [usuario]([id_usuario])
);
GO


-- ************************************** [metodo]
CREATE TABLE [metodo]
(
 [id_metodo]          int IDENTITY ,
 [met_despesa_receita] bit NOT NULL ,
 [metodo]             varchar(50) NOT NULL ,


 CONSTRAINT [pk_metodo] PRIMARY KEY CLUSTERED ([id_metodo] ASC)
);
GO


-- ************************************** [categoria]
CREATE TABLE [categoria]
(
 [id_categoria]  int IDENTITY ,
 [cat_despesa_receita] bit NOT NULL ,
 [tp_categoria]  varchar(50) NOT NULL ,


 CONSTRAINT [pk_categoria] PRIMARY KEY CLUSTERED ([id_categoria] ASC)
);
GO


-- ************************************** [fluxo]
CREATE TABLE [fluxo]
(
 [id_fluxo]           int IDENTITY ,
 [flx_despesa_receita]    bit NOT NULL ,
 [id_usuario]         int NOT NULL ,
 [id_receita_usuario] int NULL ,
 [id_despesa_usuario] int NULL ,
 [id_banco]           int NOT NULL ,
 [id_metodo]          int NOT NULL ,
 [id_categoria]       int NOT NULL ,
 [parcelamento]       numeric(4,0) NULL ,
 [valor]              numeric(14,2) NOT NULL ,
 [data]               datetime NOT NULL ,
 [descricao]          varchar(300) NOT NULL ,


 CONSTRAINT [pk_fluxo] PRIMARY KEY CLUSTERED ([id_fluxo] ASC),
 CONSTRAINT [fk_categoria__fluxo] FOREIGN KEY ([id_categoria])  REFERENCES [categoria]([id_categoria]),
 CONSTRAINT [fk_metodo__fluxo] FOREIGN KEY ([id_metodo])  REFERENCES [metodo]([id_metodo]),
 CONSTRAINT [fk_usuario__fluxo] FOREIGN KEY ([id_usuario])  REFERENCES [usuario]([id_usuario]),
 CONSTRAINT [id_banco__fluxo] FOREIGN KEY ([id_banco])  REFERENCES [banco]([id_banco])
);
GO
