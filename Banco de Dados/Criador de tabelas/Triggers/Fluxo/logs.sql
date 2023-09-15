-- Trigger para a tabela fluxo
CREATE TRIGGER tr_fluxo_update_delete
ON fluxo
AFTER UPDATE, DELETE
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @id_fluxo INT;
    DECLARE @operation VARCHAR(10);
    DECLARE @log_data NVARCHAR(MAX);

    SELECT @id_fluxo = DELETED.id_fluxo,
           @operation = CASE 
                            WHEN EXISTS (SELECT * FROM DELETED) AND NOT EXISTS (SELECT * FROM INSERTED) THEN 'DELETE'
                            WHEN EXISTS (SELECT * FROM DELETED) AND EXISTS (SELECT * FROM INSERTED) THEN 'UPDATE'
                            ELSE NULL
                        END
    FROM DELETED;

    IF @operation IS NOT NULL
    BEGIN
        SET @log_data = (SELECT 
                            'operation' = @operation,
                            'before' = (SELECT * FROM DELETED FOR JSON PATH),
                            'after' = (SELECT * FROM INSERTED FOR JSON PATH)
                         FOR JSON PATH);
        
        INSERT INTO log_edit (log_edit_data)
        VALUES (@log_data);
    END
END;
