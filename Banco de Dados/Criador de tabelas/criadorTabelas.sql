-- ************************************** [log_users]
CREATE TABLE [log_users]
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
 [saldo]      numeric(14,2) NOT NULL ,


 CONSTRAINT [pk_usuario] PRIMARY KEY CLUSTERED ([id_usuario] ASC)
);
GO


-- ************************************** [bancos]
CREATE TABLE [bancos]
(
 [id_banco]   int IDENTITY ,
 [id_usuario] int NOT NULL ,
 [banco]      varchar(50) NOT NULL ,


 CONSTRAINT [pk_bancos] PRIMARY KEY CLUSTERED ([id_banco] ASC),
 CONSTRAINT [fk_usuario__bancos] FOREIGN KEY ([id_usuario])  REFERENCES [usuario]([id_usuario])
);
GO


CREATE NONCLUSTERED INDEX [fk_usuario__bancos] ON [bancos] 
 (
  [id_usuario] ASC
 )

GO


-- ************************************** [metodos_pagamentos]
CREATE TABLE [metodos_pagamentos]
(
 [id_metodo_pagamentos] int IDENTITY ,
 [metodo]               varchar(40) NOT NULL ,


 CONSTRAINT [pk_metodos_pagamentos] PRIMARY KEY CLUSTERED ([id_metodo_pagamentos] ASC)
);
GO


-- ************************************** [categorias]
CREATE TABLE [categorias]
(
 [id_categoria] int IDENTITY ,
 [tp_categoria] varchar(50) NOT NULL ,


 CONSTRAINT [pk_categorias] PRIMARY KEY CLUSTERED ([id_categoria] ASC)
);
GO


-- ************************************** [fluxo]
CREATE TABLE [fluxo]
(
 [id_fluxo]             int IDENTITY ,
 [gasto_receita]        bit NOT NULL ,
 [recorrente]           bit NOT NULL ,
 [id_banco]             int NOT NULL ,
 [id_categoria]         int NOT NULL ,
 [id_metodo_pagamentos] int NOT NULL ,
 [parcelamento]         numeric(2,0) NULL ,
 [valor]                numeric(14,2) NOT NULL ,
 [data]                 datetime NOT NULL ,
 [observacao]           varchar(250) NOT NULL ,


 CONSTRAINT [pk_fluxo] PRIMARY KEY CLUSTERED ([id_fluxo] ASC),
 CONSTRAINT [fk_categorias__fluxo] FOREIGN KEY ([id_categoria])  REFERENCES [categorias]([id_categoria]),
 CONSTRAINT [fk_metodos_pagamentos__fluxo] FOREIGN KEY ([id_metodo_pagamentos])  REFERENCES [metodos_pagamentos]([id_metodo_pagamentos]),
 CONSTRAINT [id_bancos__fluxo] FOREIGN KEY ([id_banco])  REFERENCES [bancos]([id_banco])
);
GO